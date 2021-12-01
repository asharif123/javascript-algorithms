// find the second max in an array

// find the highest value in the array using helper max function and remove it using splice
// this means the new highest value in array is equivalent to the second max of the original array
// use helper max function again on new array to return secondmax
// time complexity: O(2n) => O(n), space complexity: o(1)

const secondMax = (arrayValues) => {
    arrayValues.sort()
    return arrayValues;
}

console.log(secondMax([1,13]));
console.log(secondMax([1,13,4,8,25,16,3,42]));
console.log(secondMax([1,13,4,8,25,16,3,42,-1,-3,-11,-12,21,31,41,51]));
