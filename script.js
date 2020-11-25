/* let js = 'Amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Jonas';
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName); */

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES';
// console.log(typeof javascriptIsFun);

/* let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); */

/* let age = 30;
age = 31;

const birthyear = 1991;
// Const cannot have values reassigned
// birthyear = 1990;

// because a constant cannot have a value reassigned it cannot be initialized as empty
// const job;

// var was prior to ES6
var job = 'programmer';
job = 'teacher';

// Not a good practice to create a variable without declaring it
lastName = 'Schmedtmann';
console.log(lastName); */

// Math operators
/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators

let x = 10 + 5;
x += 10; // x = x + 10
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(18 <= ageSarah);
const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
 */

/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge); */

/* const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log('This is an \n option for \n multiple lines.');
console.log(`Or you 
can just 
do this.`); */

/* const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving 🏎');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young wait another ${yearsLeft} years.`);
}

const birthYear = 2001;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
 */

// Type Conversion and Type Coercion
// Type Conversion
/* const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(23));

// Type Coercion
console.log('I am ' + 23 + ' years old.'); // the + trigger coercion to string
console.log('23' - '10' - 3); // the - triggered coercion to number
console.log('23' * 2); // coercion to number
console.log('23' / 2); // coercion to number
console.log('23' > 2); // coercion to number

let n = '1' + 1;
n = n - 1;
console.log(n);
 */

//Truthy and Falsy Values
//  5 Falsy values: 0, ' ', undefined, null, NaN -- These will become false when we convert them to boolean

/* console.log(Boolean(0));
console.log(Boolean('Jonas'));
console.log(Boolean(undefined));
console.log(Boolean({}));

const money = 100;

if (money) {
  console.log(`Don't spend it all!`);
} else {
  console.log('You should get a job!');
}

let height;

if (height) {
  console.log('Yay, height is defined');
} else {
  console.log('Height is undefined!');
} */

// Equality Operators == vs ===
/* 
const age = '18';

// === is the strict equality operator will not do type coercion
if (age === 18) console.log('You just became an adult (strict)');

// == is the loose equality operator and will do type coercion
if (age == 18) console.log('You just became an adult (loose)');

const favorite = Number(prompt('What is your favorite number?'));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log('Cool 23 is an amazing number!');
} else if (favorite === 7) {
  console.log('7 is also a cool number');
} else if (favorite === 9) {
  console.log('Nine is also a cool number');
} else {
  console.log('Number is not 23, 9, or 7');
}

if (favorite !== 23) console.log('Why not 23?');
 */

// Logical Operators
/* 
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasGoodVision && hasDriversLicense && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
 */

// The switch statement

const day = 'monday';

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend!');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Not a valid day!');
}
