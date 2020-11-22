const reducer = (accumulator, currentValue) => accumulator + currentValue;

const arrAverage = (arr) => {
  const sum = arr.reduce(reducer);
  const divisor = arr.length;
  return sum / divisor;
};

const dolphins = [97, 112, 101];
const koalas = [109, 95, 123];
const dolphinsAverage = arrAverage(dolphins);
const koalasAverage = arrAverage(koalas);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(`Dolphins average: ${dolphinsAverage}, and Koalas average: ${koalasAverage}
  Dolphins Win!`);
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
  console.log(`Dolphins average: ${dolphinsAverage}, and Koalas average: ${koalasAverage}
  Koalas Win!`);
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100) {
  console.log(`Dolphins average: ${dolphinsAverage}, and Koalas average: ${koalasAverage}
  It's a Draw!`);
} else {
  console.log(`Dolphins average: ${dolphinsAverage}, and Koalas average: ${koalasAverage}
  Nobody Wins...`);
}
