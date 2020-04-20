'''
Recursively compute a hierarchical k-means clustering and affinity
propagation clustering.

Code by Fred Choi
'''

import os
import argparse
import cv2
from glob import glob
from sklearn.cluster import k_means
from sklearn.cluster import AffinityPropagation
from sklearn.cluster import mean_shift
import numpy as np
import json
import clusternode as cn

print("Loading images...")
filenames = glob('./example-data/images/*.JPEG')
images = [cv2.imread(fname) for fname in filenames]

def hierarchical_k_means(xs, names, k=7, split_threshold=10, max_depth=10):
  '''
  Compute the hierarchical k means of a (transformed) data set.

  xs - input data
  ys - labels (to keep track of whats in which cluster)
  k - branching factor. How many clusters per level.
  split_threshold and max_depth - stopping point for recursion
  '''
  cluster = cn.ClusterNode()
  cluster.size = xs.shape[0]

  if xs.shape[0] < split_threshold or max_depth <= 0:
    cluster.children = [cn.ClusterNode(os.path.basename(name) , name , 1) for name in names]
    return cluster
  # print(k_means(xs, k))
  centroids, labels, _ = k_means(xs, k)

  cluster.children = []
  for i in range(k):
    cluster_xs = xs[labels==i]
    cluster_names = names[labels==i]
    subcluster = hierarchical_k_means(cluster_xs, cluster_names, k, split_threshold=split_threshold, max_depth=max_depth-1)

    # output the centroids to a separate file
    global cluster_id
    centroid_outname = './output/centroids/kmeans-centroid-' + str(cluster_id) + '.JPEG'
    cluster_id += 1
    subcluster.name = f'cluster {cluster_id}'
    subcluster.preview = centroid_outname
    cv2.imwrite(centroid_outname, centroids[i].reshape(images[0].shape))

    cluster.children.append(subcluster)

  return cluster

def hierarchical_affinity_propagation(xs, names, split_threshold=10, max_depth=10):
  '''
  Compute the hierarchical affinity propagation clustering of a (transformed) data set.

  xs - input data
  ys - labels (to keep track of whats in which cluster)
  split_threshold and max_depth - stopping point for recursion
  '''
  cluster = cn.ClusterNode()
  cluster.size = xs.shape[0]

  if xs.shape[0] < split_threshold or max_depth <= 0:
    cluster.children = [cn.ClusterNode(os.path.basename(name) , name , 1) for name in names]
    return cluster

  clustering = AffinityPropagation().fit(xs)
  n_clusters = clustering.cluster_centers_indices_.shape[0]

  if n_clusters > 1:
    cluster.children = []
    for i in range(n_clusters):
      cluster_xs = xs[clustering.labels_==i]
      cluster_names = names[clustering.labels_==i]
      subcluster = hierarchical_affinity_propagation(cluster_xs, cluster_names, split_threshold=split_threshold, max_depth=max_depth-1)

      global cluster_id
      cluster_id += 1
      subcluster.name = f'cluster {cluster_id}'
      subcluster.preview = names[clustering.cluster_centers_indices_[i]]

      cluster.children.append(subcluster)
  else:
    cluster.children = [cn.ClusterNode(os.path.basename(name) , name , 1) for name in names]

  return cluster 

def hierarchical_mean_shift(xs, names, split_threshold=10, max_depth=10):
  '''
  Compute the hierarchical mean shift clustering of a (transformed) data set.

  xs - input data
  ys - labels (to keep track of whats in which cluster)
  split_threshold and max_depth - stopping point for recursion
  '''
  cluster = cn.ClusterNode()
  cluster.size = xs.shape[0]

  if xs.shape[0] < split_threshold or max_depth <= 0:
    cluster.children = [cn.ClusterNode(os.path.basename(name) , name , 1) for name in names]
    return cluster

  cluster_centers, labels = mean_shift(xs)
  n_clusters = cluster_centers.shape[0]

  if n_clusters > 1:
    cluster.children = []
    for i in range(n_clusters):
      cluster_xs = xs[labels==i]
      cluster_names = names[labels==i]
      subcluster = hierarchical_mean_shift(cluster_xs, cluster_names, split_threshold=split_threshold, max_depth=max_depth-1)

      # output the centroids to a separate file
      global cluster_id
      centroid_outname = './output/centroids/meanshift-center-' + str(cluster_id) + '.JPEG'
      cluster_id += 1
      subcluster.name = f'cluster {cluster_id}'
      subcluster.preview = centroid_outname
      cv2.imwrite(centroid_outname, cluster_centers[i].reshape(images[0].shape))

      cluster.children.append(subcluster)
  else:
    cluster.children = [cn.ClusterNode(os.path.basename(name), name , 1) for name in names]

  return cluster

xs = np.stack(images).reshape(len(images), -1)  


print("Clustering (K-Means)...")
cluster_id = 0 # give a unique id to each cluster
kmeans = hierarchical_k_means(xs, np.array(filenames))

f = open('./output/kmeans.json', 'w')
f.write(kmeans.json())
f.write('\n')
f.close()

# print("Clustering (Affinity Propagation)...")
# cluster_id = 0 
# aprop = hierarchical_affinity_propagation(xs, np.array(filenames))

# f = open('./output/affinity-prop.json', 'w')
# f.write(aprop.json())
# f.write('\n')
# f.close()

# print("Clustering (Mean Shift)...")
# cluster_id = 0 
# mean_shift = hierarchical_mean_shift(xs, np.array(filenames))

# f = open('./output/mean-shift.json', 'w')
# f.write(mean_shift.json())
# f.write('\n')
# f.close()

print("Done!")