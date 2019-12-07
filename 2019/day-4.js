/**
 * You arrive at the Venus fuel depot only to discover it's protected by a password. The
 * Elves had written the password on a sticky note, but someone threw it out.
 * 
 * However, they do remember a few key facts about the password:
 * 
 * It is a six-digit number.
 * The value is within the range given in your puzzle input.
 * Two adjacent digits are the same (like 22 in 122345).
 * Going from left to right, the digits never decrease; they only ever increase or stay the
 * same (like 111123 or 135679).
 * Other than the range rule, the following are true:
 * 
 * 111111 meets these criteria (double 11, never decreases).
 * 223450 does not meet these criteria (decreasing pair of digits 50).
 * 123789 does not meet these criteria (no double).
 * How many different passwords within the range given in your puzzle input meet these
 * criteria?
 * 
 * Your puzzle input is 240920-789857.
 * 
 * --- Part Two ---
 * An Elf just remembered one more important detail: the two adjacent matching digits are
 * not part of a larger group of matching digits.
 * 
 * Given this additional criterion, but still ignoring the range rule, the following are
 * now true:
 * 
 * 112233 meets these criteria because the digits never decrease and all repeated digits
 * are exactly two digits long.
 * 123444 no longer meets the criteria (the repeated 44 is part of a larger group of 444).
 * 111122 meets the criteria (even though 1 is repeated more than twice, it still contains
 * a double 22).
 * How many different passwords within the range given in your puzzle input meet all of the
 * criteria?
 * 
 * Your puzzle input is still 240920-789857.
 */

const length = 6;
const rangeMin = 240920;
const rangeMax = 789857;
let possibleValues = 0;

const numberSplit = (number) => {
    const string = number.toString();
    let output = [];

    for (let i = 0, len = string.length; i < len; i += 1) {
        output.push(+string.charAt(i));
    }

    return output;
}

const findOccurencesOfNumber = (number, array) => {
    return array.reduce((n, x) => n + (x === number), 0);
}

const numberIsValid = (number, partTwo = false) => {
    let hasSameAdjacentDigits = false;
    let isValid = true;
    let splitNuber = numberSplit(number);

    splitNuber.forEach((digit, index) => {
        if (index > 0 && digit < splitNuber[index - 1]) {
            isValid = false;
        }

        if (index >= splitNuber.length) {
            isValid = false;
        }

        if (digit === splitNuber[index + 1]
            && (!partTwo || findOccurencesOfNumber(digit, splitNuber) === 2)) {
            hasSameAdjacentDigits = true;
        }
    });

    return isValid && hasSameAdjacentDigits;
}

const task = (partTwo = false) => {
    let number = rangeMin;
    while (number <= rangeMax && number.toString().length < 7) {
        if (numberIsValid(number, partTwo)) {
            possibleValues++;
        }

        number++;

        if (number.toString().length >= 7) {
            break;
        }
    }

    console.log('Possible Values for password: ', possibleValues);
}

// task();
task(true);