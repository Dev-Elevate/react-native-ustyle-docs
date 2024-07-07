export const getAllPaths = (tree: any) => {
  if (!tree) {
    return [];
  }
  const paths = [];
  const { children } = tree;
  if (children) {
    children.forEach((child: any) => {
      paths.push(...getAllPaths(child));
    });
  } else {
    paths.push(tree.path);
  }
  return paths;
};
