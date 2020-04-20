# Used to store the clusters and output them JSON
class ClusterNode:
  def __init__(self, name=None, preview=None, size=None):
    self.name = name
    self.preview = preview
    self.children = None
    self.size = size

  def json(self, level=0):
    indent = ' '*(2*level)
    result = indent + '{\n'

    if self.name is not None:
      result += indent + '  "name" : "' + self.name + '",\n'

    if self.preview is not None:
      result += indent + '  "preview" : "' + self.preview + '",\n'

    if self.size is not None:
      result += indent + '  "size" : ' + str(self.size) + ',\n'

    if self.children is not None:
      result += indent + '  "children" : [\n'

      for subcluster in self.children:
        result += subcluster.json(level=level + 2) + ',\n'
      result = result[:-2] + '\n'
      result += indent + '  ]\n,'

    result = result[:-2] + '\n'
    result += indent + '}'
    
    return result