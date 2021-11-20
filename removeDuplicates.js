// // create an array to store unique values
// // do a for loop where you iterate via each value in original array
// // put value in unique array if it does not already exist
// // return uniqueArray

// const removeDuplicates = (array) => {
//     return array.filter((value,index) => index == array.indexOf(value));
// }

// console.log(removeDuplicates([1,2,3,2,5,5,4,2,4,14,22,24]))

const removeDuplicates = (originalArray) => {
    returnedArray = originalArray.filter((value,i) => i === originalArray.indexOf(value))
    return returnedArray;
}

console.log(removeDuplicates([1,2,2,3]));
console.log(removeDuplicates([1,23,4,5,6,7,12,22,2,22,23,3]));
console.log(removeDuplicates([4,5,4,4,7,5]));