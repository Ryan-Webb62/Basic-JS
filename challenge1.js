const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const bmiCalc = (mass, height) => {
  let bmi = mass / height ** 2;
  return bmi;
};

const bmiCompare = (markBMI, johnBMI) => {
  let markHigherBMI = false;
  if (markBMI > johnBMI) markHigherBMI = true;
  return markHigherBMI;
};

const markBMI = bmiCalc(markMass, markHeight);
console.log(`Mark's BMI is ${markBMI}`);
const johnBMI = bmiCalc(johnMass, johnHeight);
console.log(`John's BMI is ${johnBMI}`);
const markHigherBMI = bmiCompare(markBMI, johnBMI);
console.log(`Is Mark's BMI higher?: ${markHigherBMI}`);
