let pad = function(n, width, z) {
  n = n + '';
  width = width || 2;
  z = z || '0';

  return n.length >= width ?
    n :
    new Array(width - n.length + 1).join(z) + n;
};

export default pad;
