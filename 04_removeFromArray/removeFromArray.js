const removeFromArray = function (array, ...number) {
  const newArray = [];
  array.forEach((object) => {
    if (!number.includes(object)) {
      newArray.push(object);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
