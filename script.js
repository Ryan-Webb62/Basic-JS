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

const age = 15;

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