const pad = function (number, width, filling) {
  number += '';
  width = width || 2;
  filling = filling || '0';

  return number.length >= width ?
    number :
    new Array(width - number.length + 1).join(filling) + number;
};

export default pad;
