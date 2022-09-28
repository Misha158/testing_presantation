const mapArrToStrings = (array) => {
  if (!array.length) {
    return [];
  }

  return array.map((el) => String(Math.pow(el, 2)));
};

module.exports = mapArrToStrings;
