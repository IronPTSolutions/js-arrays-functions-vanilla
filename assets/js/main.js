console.log('Hello World!');

console.log(greet('Paco'));

function greet(name, lang = 'en') {
  switch (lang) {
    case 'es':
      return `Hola, ${name}!`;
    case 'en':
    default:
      return `Hi, ${name}!`;
  }
}

function isVowel(char) {
  char = char.toLowerCase();
  switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}

function countVowels(word) {
  let vowels = 0;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (isVowel(char)) {
      vowels++;
    }
  }
  return vowels;
}

function sum(numbers) {
  let acc = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    acc += number;
  }
  return acc;
}

console.log(`sum of: ${sum([1, 2])}`);

console.log(isVowel('A'));
console.log(isVowel('a'));
console.log(isVowel('U'));
console.log(isVowel('c'));
console.log(greet('Carlos', 'es'));


const names = ['Carlos', 'Juli', 'Ana', 'María', 'Eduardo'];

// qqq
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

const evenCopy = even;
console.log(`Even copy: ${evenCopy}`);
evenCopy[0] = 5;
console.log(`Evens: ${evenCopy} - ${even}`);
