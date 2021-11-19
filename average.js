/*
 * write a function that takes array and outputs average from array
 */

// ask user for an array of numbers
// create a variable to store the sum of values in array, initially set variable to 0
// do for loop of values in array and add each value to sum variable
// take the sum and divide by length of array to return the average (rounded to nearest 1 value)


// Ex:
// Input: [ 1 , 4 , 7 ]
// Output: 4

// Input: [ 10, 5 ]
// Output: 7.5

// Input: [ 1.5, 3, 2.5, 1 ]
// Output: 2

function average(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return ((total) / numbers.length).toFixed(1)
}


console.log(average([1.5,3,2.5,1]));
console.log(average([10,5]));
console.log(average([1,4,7]));

