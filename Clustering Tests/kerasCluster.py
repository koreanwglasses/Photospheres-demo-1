from keras.preprocessing import image
from keras.applications.vgg16 import VGG16
from keras.applications.vgg16 import preprocess_input
import numpy as np
from sklearn.cluster import KMeans
import glob
from clusternode import ClusterNode
import cv2
import os
import argparse

def hierarchical_k_means(X, images, names,  k=7, split_threshold=10, max_depth=10):
    '''
    Compute the hierarchical k means of a (transformed) data set.
    X - input data
    names - labels (to keep track of whats in which cluster)
    locations - locations of data poitns in a particular embedding
    k - branching factor. How many clusters per level.
    split_threshold and max_depth - stopping point for recursion
    '''
    cluster = ClusterNode()
    cluster.size = X.shape[0]

    # output the centroids to a separate file
    global cluster_id
    centroid_outname = './output/centroids/keras-centroid-' + \
        str(cluster_id) + '.JPEG'
    cluster_id += 1
    cluster.name = f'cluster {cluster_id}'
    cluster.preview = centroid_outname
    cv2.imwrite(centroid_outname, np.mean(images, axis=0))

    # Base Case
    if X.shape[0] < split_threshold or max_depth <= 0:
        cluster.children = [ClusterNode(os.path.basename(
            name), name, 1) for name in names]
        return cluster

    # Cluster and Recurse
    kmeans = KMeans(n_clusters=k).fit(X)
    labels = kmeans.labels_

    cluster.children = []
    for i in range(k):
        cluster_X = X[labels == i]
        cluster_images = images[labels == i]
        cluster_names = names[labels == i]
        subcluster = hierarchical_k_means(cluster_X, cluster_images, cluster_names,
                                          k=k, split_threshold=split_threshold, max_depth=max_depth-1)
        cluster.children.append(subcluster)

    return cluster

def kerasCluster(filenames):
    model = VGG16(weights='imagenet', include_top=False)
    model.summary()
    # Idea: Use glob and the file names to implment this. I think it's kind of cheating given our goal w the project but it should work fine overall

    # Use silhouette coefficient to validate https://scikit-learn.org/stable/modules/clustering.html#silhouette-coefficient

    vgg16_feature_list = []

    # images = [cv2.imread(fname) for fname in filenames]
    # print(filenames)
    for img_path in filenames:
        # print(img_path)
        # Code to take an image and add it to the model feature list
        img = image.load_img(img_path) #All images already the same size
        img_data = image.img_to_array(img)
        img_data = np.expand_dims(img_data, axis=0)
        img_data = preprocess_input(img_data)

        vgg16_feature = model.predict(img_data)
        vgg16_feature_np = np.array(vgg16_feature)
        vgg16_feature_list.append(vgg16_feature_np.flatten())

    # Take the feature list, make it into a numpy array, and then fit a k means model to it.
    vgg16_feature_list_np = np.array(vgg16_feature_list)
    print(vgg16_feature_list_np)
    return vgg16_feature_list_np

filenames = glob.glob('./example-data/images/*.JPEG')
images = [cv2.imread(fname) for fname in filenames] #Load all images

print("Clustering (K-Means) + Keras...")
cluster_id = 0 # give a unique id to each cluster
kerasPreproc = kerasCluster(filenames) #TODO Cache this result
print("Keras Model Completed Training")
kmeans = hierarchical_k_means(kerasPreproc, np.stack(images), np.array(filenames))

f = open('./output/keras.json', 'w')
f.write(kmeans.json())
f.write('\n')
f.close()
print("Completed!")

#TODO Visualize the result of kmeans
#TODO Add the default clustering code
#TODO Decide if this is a good solution
