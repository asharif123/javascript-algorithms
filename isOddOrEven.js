/*
 * In this activity you will be writing code to create a function that determines whether a number is odd or even.
 */

// ask user to enter a number
// if number is divisible by 2 and returns 0 as remainder, it's even
// if number is not divisible by 2 and returns 1 as remainder, it's odd

function isOddOrEven(number) {
    if (number % 2 === 0) {
        return `${number} is even!`;
    }

    else {
        return `${number} is odd!`;
    }
}

console.log(isOddOrEven(2));
console.log(isOddOrEven(21));
console.log(isOddOrEven(31));
console.log(isOddOrEven(-2));
console.log(isOddOrEven(-1));

/* 

    In this activity you will be writing code to create a function that prints all whole numbers from 1 to a given number.

*/