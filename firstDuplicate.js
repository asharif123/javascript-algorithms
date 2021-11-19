// create an array with unique elements from original array
// take each element from unique array and count how many times it occurs in original array
// if the total of that element we are analyzing is larger than 1, return that letter
// if they are all unique, return undefined.
// /* 
// Write a function that takes an array of integers as an input and outputs the first duplicate.

// Ex:
// Input: [ 2, 5, 6, 3, 5 ]
// Output: 5

// Input: [ 1, 3, 4, 1, 3, 4 ]
// Output: 1

// Input: [ 2, 4, 5 ]
// Output: undefined

// */

function firstDuplicate(array) {
    var uniqueArray = new Set(array);
    for (value of uniqueArray) {
        var total = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) {
                total += 1
            }
        }
        if (total > 1) {
            return value;
        }
    }
    return undefined;
}

// create array to store unique values
// iterate thru every value in original array and add to new unique value array if it is not in unique array
// if value is already in unique array, return that value
// if we find every value in original is unique, return undefined

function firstDuplicate(array) {
    var uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
         if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i]);
        }
        else {
            return array[i];
        }
    }
    return undefined;
}
