# Test image hashing as means of clustering
import os
import cv2
from glob import glob
import imagehash
import clusternode as cn
from sklearn.cluster import KMeans
from scipy.cluster.hierarchy import linkage
from scipy.spatial.distance import pdist
import numpy as np
import matplotlib as plt
from PIL import Image
# Load in a set of images
# Hash them
# Cluster based on different thresholds of "hash distance"
#TODO: Switch to agglomerative clustering
#https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AgglomerativeClustering.html
class ClusterNode:
    def __init__(self, name=None, preview=None, size=None, x=None, y=None, bounds=None, avg_img=None):
        self.name = name
        self.preview = preview
        self.children = []
        self.size = size
        self.x = x
        self.y = y
        self.bounds = bounds
        self.avg_img = avg_img
    # This function outputs the required json string for this cluster and any children

    def json(self, level=0):
        indent = ' '*(2*level)
        result = indent + '{\n'

        if self.name is not None:
            result += indent + '  "name" : "' + self.name + '",\n'

        if self.preview is not None:
            result += indent + '  "preview" : "' + self.preview + '",\n'

        if self.size is not None:
            result += indent + '  "size" : ' + str(self.size) + ',\n'

        if self.x is not None:
            result += indent + '  "x" : ' + str(self.x) + ',\n'

        if self.y is not None:
            result += indent + '  "y" : ' + str(self.y) + ',\n'

        if self.bounds is not None:
            result += indent + '  "bounds" : ' + str(self.bounds) + ',\n'

        if self.children != []:
            result += indent + '  "children" : [\n'

            for subcluster in self.children:
                result += subcluster.json(level=level + 2) + ',\n'
            result = result[:-2] + '\n'
            result += indent + '  ]\n,'

        result = result[:-2] + '\n'
        result += indent + '}'

        return result


cluster_id = 0


def hierarchical_k_means(X, images, names, k=7, split_threshold=10, max_depth=10):
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
    # cluster.bounds = [np.min(locations[:, 0]), np.min(
        # locations[:, 1]), np.ptp(locations[:, 0]), np.ptp(locations[:, 1])]

    # output the centroids to a separate file
    # Requires the images array, and the global for the id.
    global cluster_id
    centroid_outname = './example-data/centroids/kmeans-centroid-' + str(cluster_id) + '.JPEG'
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
        # cluster_locations = locations[labels == i]
        subcluster = hierarchical_k_means(cluster_X, cluster_images, cluster_names,
                                          k=k, split_threshold=split_threshold, max_depth=max_depth-1)

        cluster.children.append(subcluster)

    return cluster

#Takes the output of hierarchical clustering based on hamming distance and turns it into clusters and average images
#!Figure out how to process the output into meangingful clusters
def hammingClustering(hamming, images, names):
    #Intialization
    # print(hamming.shape)
    n = len(hamming)
    # print(images.shape)
    hamming = np.asarray(hamming)
    print(hamming[n-2])
    completedNodes = {}
    return createClusters(hamming[n-2], hamming, images, completedNodes, names)

def createClusters(z, hamming, images, completed, names):
    cluster = ClusterNode()
    # print(z)
    cluster.size = z[3] #How many nodes are under it, min is 2.
    # cluster.x = z[2] #Distance (TODO: Add this as a seperate thing in the json for us to do stuff with)

    global cluster_id
    #TODO If it's not a centroid, we should probably not treat it like one in the json (i.e. there should just be paths to images.)
    centroid_outname = './example-data/centroids/hamming-average-' + str(cluster_id) + '.JPEG'
    cluster_id += 1
    cluster.children = [] #Every cluster has children in this paradigm
    cluster.name = f'cluster {cluster_id}'
    cluster.preview = centroid_outname

    print(cluster_id, 'zs', z[0], z[1], z[0] in completed, z[1] in completed)

    #If z is a base level image (less than n)
    if z[0] < len(hamming) and z[1] < len(hamming):
        #Create a centroid for these images
        # print("Branch has reached a base node, stopping down recursion.")
        cluster.avg_img = cv2.imwrite(centroid_outname, np.mean((images[int(z[0])], images[int(z[1])]), axis=0))
        completed[z[0]] = images[int(z[0])]
        completed[z[1]] = images[int(z[1])]
        print(cluster_id, 'Finished')
        cluster.children = [
            ClusterNode(os.path.basename(names[int(z[0])]), names[int(z[0])], 1),
            ClusterNode(os.path.basename(names[int(z[1])]), names[int(z[1])], 1)
        ]
        return cluster
    #General case, requiring some level of recursion to unpack a cluster.
    #NOTE: It'd be better design if this was a function.
    #if it's been completed, we need it's average image
    if z[0] in completed:
        img1 = completed[z[0]]
    #if it's never been touched, but big enough, we need to recurse and complete it.
    elif z[0] > len(hamming):
        child = int(z[0]) - len(hamming)
        completed[z[0]] = True
        newCluster1 = createClusters(hamming[child], hamming, images, completed, names)
        cluster.children.append(newCluster1)
        img1 = newCluster1.avg_img #NOTE: This whole average image storage in the object is useless now
        completed[z[0]] = img1
    #if it's never been touched, but small enough, we can complete it.
    else:
        img1 = images[int(z[0])]
        completed[z[0]] = img1
        #TODO: Shouldn't make an extra cluster for one of these
    #if it's been completed, we need it's average image
    if z[1] in completed:
        img2 = completed[z[1]]
    #if it's never been touched, but big enough, we need to recurse and complete it.
    elif z[1] > len(hamming):
        child = int(z[1]) - len(hamming)
        completed[z[1]] = True
        newCluster2 = createClusters(hamming[child], hamming, images, completed, names)
        cluster.children.append(newCluster2)
        img2 = newCluster2.avg_img
        completed[z[1]] = img2
    #if it's never been touched, but small enough, we can complete it.
    else:
        img2 = images[int(z[0])]
        completed[z[1]] = img2

    #Create an avg image using the prior averages TODO: See if this can be weighted by cluster size.
    cluster.avg_img = cv2.imwrite(centroid_outname, np.mean([img1, img2], axis=0))
    return cluster



# Prepare input data
print("Initializing images...")
filenames = glob('./example-data/images/*.JPEG') #Grab all the image files
images = [cv2.imread(fname) for fname in filenames] #Load all images
rawimages = [Image.open(fname) for fname in filenames] #Load all raw images to be hashed NOTE this probably doesn't scale well
# image_shape = images[0].shape
# X = np.stack(images).reshape(len(images), -1)

#Hash all images, this will be the new X
X_averagehashed = [imagehash.average_hash(x).hash for x in rawimages]
# print(X_averagehashed)
X_avg = np.stack(X_averagehashed).reshape(len(images), -1)

# # Reduce dimensionality
# print("Performing PCA...")
# X_reduced = PCA(n_components=20).fit_transform(X)

# print("Trying TSNE...")
# X_embedded = TSNE(n_components=2).fit_transform(X_reduced)

# plt.scatter(X_embedded[:, 0], X_embedded[:, 1])
# plt.show()

# print("Comparing K-means...")
# k-means on unreduced input points
# kmeans = KMeans(n_clusters=7).fit(X)

# plt.scatter(X_embedded[:, 0], X_embedded[:, 1], c=kmeans.labels_, cmap="Accent")
# plt.show()

# print("Computing K-means...")

# hkmeans = hierarchical_k_means(X_avg, np.stack(images), np.array(filenames))

# f = open('./example-data/kmeans-hashed.json', 'w')
# f.write(hkmeans.json())
# f.write('\n')
# f.close()

print("Computing Hamming Linkage...")
cluster_id = 0
X_avg = pdist(X_avg, metric='hamming')
hamming = linkage(X_avg, metric='hamming', method='complete')
np.savetxt('hamming.txt', hamming)
ham = hammingClustering(hamming, np.stack(images), np.array(filenames))

f = open('./example-data/hamming-hashed.json', 'w')
f.write(ham.json())
f.write('\n')
f.close()

print("Done!")
