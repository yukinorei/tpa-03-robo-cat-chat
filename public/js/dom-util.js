const appendChildren = function(parentNode, ...children) {
  children.forEach(childNode => parentNode.appendChild(childNode));
};

export {
  appendChildren,
};
