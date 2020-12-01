const readFile = require('./helpers/file');

const text    = readFile('./inputs/day-1.txt');
const numbers = text.split("\n").map(number => Number(number));
const length  = numbers.length;
const target  = 2020;

const partOne = () => {
  for (let i = 0; i < length; i++) {
    const number = numbers[i];
    const remaining = target - number;
    const remainingIndex = numbers.find(number => number === remaining);

    if (remainingIndex > -1) {
      return number * remaining;
    }
  }

  return null;
}

const partTwo = () => {
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length - 1; j++) {
      for (let k = j + 1; k < length - 2; k++) {
        const a = numbers[i], 
              b = numbers[j], 
              c = numbers[k];
        const sum = a + b + c;
  
        if (sum === target) {
          return a * b * c;
        }
      }
    }
  }

  return null;
}

const partOneSolution = partOne();
console.log('part one solution: ', partOneSolution);

const partTwoSolution = partTwo();
console.log('part two solution: ', partTwoSolution);