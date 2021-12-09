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
//create a function that takes in a sorted array and a target value
//if last value in array is smaller than target, return length of array
//assign left index to index of first value array and right index to index to last value in array
//assign midpoint to average of index of right and left values
//if target value is greater than midpoint, assign left index to average of index of right and left values
//if target value is less than midpoint, assign right index to average of index of right and left values
//if target value equals to midpoint value, return midpoint
//Ex: // [1,4,5,11,22], 13
//assign midpoint to 5, left to 1 and right to 22
//since target is greater than midpoint, assign left to old midpoint so now [5,11,22], 13
//assign new midpoint to 11, left is now 5 and right still 22
//target is greater than midpoint, shift left to point to 11, midpoint now 11 and right still 22 so now [11,22], 13
//since target is greater than new midpoint 11, shift left to point to 22, right still pointing to 22 so now [22], 13
//now that left and right are pointing to same value, return index of that value (or mid)

const targetFound = (nums, target) => {

    let left = 0, right = nums.length
    let mid = Math.floor((right + left) / 2);
    while(left < right) {

        if(nums[mid]===target) {
            return console.log(mid);
        } else if(nums[mid] > target){
            right = mid
        } else {
            left = mid + 1
        }
        mid = Math.floor((right + left) / 2)
    }
    return console.log(mid)
};
targetFound([1,3,5,6], 2)
targetFound([1,3,5,6], 0)
targetFound([1,3,5,6], 5)


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
