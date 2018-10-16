import string from '../../string';

const dmY = function (date) {
  const object = new Date(date);

  const day = object.getDate(),
    month = (object.getMonth() + 1),
    year = object.getFullYear();

  return `${string.pad(day)}/${string.pad(month)}/${year}`;
};

export default dmY;
