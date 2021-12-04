// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

// assume any positive integer starting at 1 or higher
// create a function that takes in a positive value
// create a variable to store the total to count number of divisors into positive integer
// use a for loop to loop from 1 up to positive integer and 
// if each number evenly divides into that number, increment total
// return total
// if user inputs 1, return 1 because only 1 divides evenly into 1

// const numberofDivisors = (number) => {
//     let total = 0;
//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {
//             // console.log("NUMBER", i)
//             total += 1;
//         }
//     }

//     return total;
// }

// assume any positive integer starting at 1 or higher
// create a function that takes in a positive value
// create a variable to store the total and assign total to 1 b/c each number will be divisible evenly by its own value
// use a for loop to loop from 1 up to (number/2) rounded down
// if each number evenly divides into that number, increment total
// return total

const numberofDivisors = (number) => {
    let total = 1;
    if (number === 1) {
        return total;
    }
    else {
        for (let i = 1; i <= Math.floor(number/2); i++) {
            if (number % i === 0) {
                // console.log("NUMBER", i)
                total += 1;
            }
        }

    }

    return total;
}

// console.log(numberofDivisors(4));
// console.log(numberofDivisors(1));
// console.log(numberofDivisors(5));
// console.log(numberofDivisors(12));
console.log(numberofDivisors(30000000));