const reverseString = function (word) {
  let split = word.split("");
  let reverseArray = split.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
