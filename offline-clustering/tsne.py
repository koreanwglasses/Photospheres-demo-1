import os
import cv2
from glob import glob
import numpy as np
from sklearn.manifold import TSNE
from sklearn.decomposition import PCA
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt


# Used to store the clusters and output them JSON
class ClusterNode:
  def __init__(self, name=None, preview=None, size=None, x=None, y=None):
    self.name = name
    self.preview = preview
    self.children = []
    self.size = size
    self.x = x
    self.y = y

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
      result += indent + ' "x" : ' + str(list(self.x)) + ',\n'

    if self.y is not None:
      result += indent + ' "y" : ' + str(list(self.y)) + ',\n'

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
def hierarchical_k_means(X, images, names, locations, k=7, split_threshold=10, max_depth=10):
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
  centroid_outname = './example-data/centroids/kmeans-centroid-' + str(cluster_id) + '.JPEG'
  cluster_id += 1
  cluster.name = f'cluster {cluster_id}'
  cluster.preview = centroid_outname
  cv2.imwrite(centroid_outname, np.mean(images, axis=0))

  # Compute locations
  if cluster.size > 1:
    X_embedded = TSNE(n_components=2).fit_transform(X)
  else:
    X_embedded = np.zeros((1, 2))
  locations = np.concatenate([locations, X_embedded[:, :, None]], axis=2)

  # Base Case
  if X.shape[0] < split_threshold or max_depth <= 0:
    cluster.children = [ClusterNode(os.path.basename(name), name, 1, x=location[0], y=location[1]) for name, location in zip(names, locations)]
    return cluster

  # Cluster and Recurse
  kmeans = KMeans(n_clusters=k).fit(X)
  labels = kmeans.labels_

  cluster.children = []
  for i in range(k):
    cluster_X = X[labels==i]
    cluster_images = images[labels==i]
    cluster_names = names[labels==i]
    cluster_locations = locations[labels==i]
    subcluster = hierarchical_k_means(cluster_X, cluster_images, cluster_names, cluster_locations, k=k, split_threshold=split_threshold, max_depth=max_depth-1)

    cluster.children.append(subcluster)

  return cluster

# Prepare input data
print("Initializing images...")
filenames = glob('./example-data/images/*.JPEG')
images = [cv2.imread(fname) for fname in filenames]
image_shape = images[0].shape
X = np.stack(images).reshape(len(images), -1)  

# Reduce dimensionality
print("Performing PCA...")
X_reduced = PCA(n_components=20).fit_transform(X)

print("Computing K-means...")

hkmeans = hierarchical_k_means(X_reduced, np.stack(images), np.array(filenames), np.zeros((len(images), 2, 0)))

f = open('./example-data/cluster-data.json', 'w')
f.write(hkmeans.json())
f.write('\n')
f.close()

print("Done!")