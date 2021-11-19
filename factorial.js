/*
 * Create the function factorial here
 */

// create a function taking values from 1 to 10
// set num = 1
// iterate from 1 to 10, multiply with num and assign to new num
// return final num solution

function factorial(value) {
    var num = 1;
    for (var i = 1; i <= value; i++) {
        num *= i;
    }
    
    return num;
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));