const billValue = 430;
const tipValue =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

console.log(
  `The bill was ${billValue}, the tip was ${tipValue}, and the total value was ${
    billValue + tipValue
  }`
);
