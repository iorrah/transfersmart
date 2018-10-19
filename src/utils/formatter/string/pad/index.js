const pad = (number, width = 2, filling = '0') => {
  const numberStr = `${number}`;

  if (numberStr.length >= width) {
    return number;
  }

  const padding = new Array((width - numberStr.length) + 1).join(filling);
  return `${padding}${numberStr}`;
};

export default pad;
