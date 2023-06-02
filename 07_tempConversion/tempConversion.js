const convertToCelsius = function (DegreeC) {
  let celcius = ((DegreeC - 32) * 5) / 9;
  const roundedCelcius = Math.round(celcius * 10) / 10;
  return roundedCelcius;
};

const convertToFahrenheit = function (DegreeF) {
  let fahrenheit = (DegreeF * 9) / 5 + 32;
  const roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
