// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
//If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity. NO using builtin methods

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104



// USING O(log n) (Hint: use binary search tree)

// WITHOUT using O(log n)

//create a function that takes array of whole numbers and a target value
//use a for loop to iterate through each value in an array
//if value is less than target, continue iterating
//if value we are iterating is equal to or greater than target, return index of that value
//else if every value in array is smaller than targer, at the end of for loop, return length of array

// const targetFound = (arrayofValues, target) => {
//     for (let i = 0; i < arrayofValues.length; i++) {
//         if (arrayofValues[i] >= target) {
//             return i;
//         }
//     }
//     return arrayofValues.length;

// }

// console.log(targetFound([1,3,5,6], 2))
// console.log(targetFound([1,3,5,6], 5))
// console.log(targetFound([1,3,5,6], 7))
// console.log(targetFound([1,3,5,6], 0))
// console.log(targetFound([1], 0))
