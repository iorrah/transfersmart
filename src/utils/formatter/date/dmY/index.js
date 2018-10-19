import string from '../../string';

const dmY = (date) => {
  const object = new Date(date);

  const day = object.getDate();
  const month = (object.getMonth() + 1);
  const year = object.getFullYear();

  return `${string.pad(day)}/${string.pad(month)}/${year}`;
};

export default dmY;
