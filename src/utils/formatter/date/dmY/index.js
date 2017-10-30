import string from '../../string';

let dmY = function(date) {
  const object = new Date(date);

  const day = object.getDate();
  const month = (object.getMonth() + 1);
  const year = object.getFullYear();

  // console.log('day: ' + day);
  // console.log('month: ' + month);
  // console.log('year: ' + year);

  return `${string.pad(day)}/${string.pad(month)}/${year}`;
  // return `${day}/${month}/${year}`;
};

export default dmY;
