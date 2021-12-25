// # Common Element

// In this activity you will be writing code to create a function that takes in two arrays of numbers, with one number in common between the two arrays. Your function should return the number in common between the two arrays.

// ## Instructions

// * Open [Unsolved/common-element.js](Unsolved/common-element.js) in your code editor&mdash;this is the only file you will modify in this activity.

//   * In this file you will be writing code in the body of the `commonElement` function to achieve the following:

//     * Return the number in common between the two given arrays.

//     * See the following arrays for an example:

//       ```js
//       // The number 1 is present in both arrays
//       var arrA = [1, 9, 8, 7];
//       var arrB = [10, 12, 1, 6, 5];
//       ```

//     * Given the preceding arrays, the following should be returned:

//       ```js
//       1
//       ```

//     > **Important:** You may not use the `indexOf` or `includes` methods to complete this problem.

// * You can check whether your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

//   * Functions that pass the tests will be denoted with a green check mark.

//   * Functions that fail the tests will be denoted with a red X and an error message.

// ### Hints

// You might want to use the code from the previous `zeroes-and-ones` activity in your solution for this problem.

// var expect = chai.expect;

// describe("commonElement", function() {
//   it(`should return 4 when given [5, 3, 4, 10] and [0, 4, 9, 99]`, function() {
//     var arrA = [0, 4, 9, 99];
//     var arrB = [5, 3, 4, 10];

//     var result = commonElement(arrA, arrB);

//     expect(result).to.eql(4);
//   });

//   it(`should return 0 when given [82, 43, 17, 0, -81] and [1, 0, -1, -2, -10]`, function() {
//     var arrA = [82, 43, 17, 0, -81];
//     var arrB = [1, 0, -1, -2, -10];

//     var result = commonElement(arrA, arrB);

//     expect(result).to.eql(0);
//   });

//   it(`should return 8 when given [10, 8, 6, 4, 2] and [8, 80, 800, 8000, 80000]`, function() {
//     var arrA = [10, 8, 6, 4, 2];
//     var arrB = [8, 80, 800, 8000, 80000];

//     var result = commonElement(arrA, arrB);

//     expect(result).to.eql(8);
//   });
// });
// ---
// © 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

//STEPS
//do a for loop on the first array and map each value to an object storing its number and count
//do a for loop on the second array and if the value we iterate in second array exists in the object, subtract it by 1
//do another for loop on the first array and for each value, if the count of its value in the object created for first array is 0,
//return that value because we know it's common in both first and second element

const commonElement = (arrA, arrB) => {
    let mappedFirstArray = {};
    for (let i = 0; i < arrA.length; i++) {
        mappedFirstArray[arrA[i]] = 1;
    }
    for (let j = 0; j < arrB.length; j++) {
        if (mappedFirstArray[arrB[j]]) {
            mappedFirstArray[arrB[j]] -= 1
        }
    }
    for (let j = 0; j < arrA.length; j++) {
        if (mappedFirstArray[arrA[j]] === 0) {
            return arrA[j]
        }
    }
}

console.log(commonElement([5, 3, 4, 10], [0,4,9,99]))
//     var arrA = [82, 43, 17, 0, -81];
//     var arrB = [1, 0, -1, -2, -10];
console.log(commonElement([82, 43, 17, 0, -81], [1, 0, -1, -2, -10]))
//     var arrA = [10, 8, 6, 4, 2];
//     var arrB = [8, 80, 800, 8000, 80000];
console.log(commonElement([10,8,6,4,2], [8,80,800,8000,80000]))
