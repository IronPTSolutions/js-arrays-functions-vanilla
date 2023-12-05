console.log('Hello World!');

const names = ['Carlos', 'Juli', 'Ana', 'María', 'Eduardo'];

// Greet
for (let i = 0; i < names.length; i++) {
  const name = names[i];
  console.log(`Hi! my name is: ${name}`);
}

let longest;
for (let i = 0; i < names.length; i++) {
  const name = names[i];
  if (longest === undefined) {
    longest = name;
  } else if (name.length > longest.length) {
    longest = name;
  }
}
console.log(`Longest name is: ${longest}`);

// i = 0
// longest = undefined
// name = 'Carlos'
// longest = 'Carlos'

// i = 1
// longest = 'Carlos';
// name = 'Juli'
// 4 > 6

// i = 2
// longest = 'Carlos';
// name = 'Ana';
// 3 > 6


const numbers = [10, 5, 3, 1, 12];
let min;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (min === undefined) {
    min = number;
  } else if (number < min) {
    min = number;
  }
}
console.log(`Min number is: ${min}`);

// i = 0;
// min = undefined;
// number = 10;
// min = 10

// i = 1;
// min = 10
// number = 5;


let sum;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (sum === undefined) {
    sum = number;
  } else {
    sum = sum + number;
  }
}
console.log(`sum of ${numbers}: ${sum}`);

// i = 0;
// number = 10
// sum = 10

// i = 1;
// number = 5
// 


const even = [];
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (number % 2 === 0) {
    even.push(number);
  }
}
console.log(`Even numbers of ${numbers}: ${even}`);