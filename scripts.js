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

// function average(numbers) {
//     var total = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }

//     return ((total) / numbers.length).toFixed(1)
// }


// console.log(average([1.5,3,2.5,1]));
// console.log(average([10,5]));
// console.log(average([1,4,7]));

/*
 * Create the function factorial here
 */

// create a function taking values from 1 to 10
// set num = 1
// iterate from 1 to 10, multiply with num and assign to new num
// return final num solution

// function factorial(value) {
//     var num = 1;
//     for (var i = 1; i <= value; i++) {
//         num *= i;
//     }
    
//     return num;
// }

// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(10));

/*
 * In this activity you will be writing code to create a function that determines whether a number is odd or even.
 */

// ask user to enter a number
// if number is divisible by 2 and returns 0 as remainder, it's even
// if number is not divisible by 2 and returns 1 as remainder, it's odd

// function isOddOrEven(number) {
//     if (number % 2 === 0) {
//         return `${number} is even!`;
//     }

//     else {
//         return `${number} is odd!`;
//     }
// }

// console.log(isOddOrEven(2));
// console.log(isOddOrEven(21));
// console.log(isOddOrEven(31));
// console.log(isOddOrEven(-2));
// console.log(isOddOrEven(-1));

/* 

    In this activity you will be writing code to create a function that prints all whole numbers from 1 to a given number.

*/

// user inputs value and convert it to positive value
// use for loop to loop from 1 up to that value inclusive and print each value

// function printNumbers(value) {
//     value = Math.abs(value);
//     for (var i = 1; i <= value; i++) {
//         console.log(i);
//     }
// }

// printNumbers(5);
// printNumbers(15);
// printNumbers(25);

/*   - In this file you will be writing code in the body of the `countdown` function to achieve the following:

    - Print all numbers from the given `num` argument to `1`, inclusive.

*/

// take a value and ensure it's positive
// use for loop to decrement value by 1 and print each value including 1
// function countDown(value) {
//     for (var i=value; i > 0; i--) {
//         console.log(i);
//     }
// }

// countDown(10);

/* create a function that adds up all the numbers in a given array and returns the total. */

// create function that takes array of values
// create a value and assign it to 0 (var total = 0)
// use for loop to iterate via each value in array
// return total after all values have been added to total

// function sumValues(values) {
//     var total = 0;
//     for (var i = 0; i < values.length; i++) {
//         total += values[i];
//     }

//     return total;
// }

// console.log(sumValues([3,5,1,2]));
// console.log(sumValues([13,-5,11,3,6,3.42]));

/* In this activity you will be writing code to create a function that takes in a string and determines whether or not 
it is a palindrome. A **palindrome** is any string spelled the same forwards as it is backwards. */

// ex: radar, mom, dad are palindromes
// create a function to determine if word is palindrome or not
// make the word lowercase
// a word is palindrome if first letter is equal to last, second letter is equal to second to last, etc.
// if we hit letter that is not equal to its compliment, its not palindrome
// we iterate until we hit middle letter and if we find each letter is equal to its compliment, it's palindrome

// function isPalindrome(word) {
//     word = word.toLowerCase();
//     for (var i = 0; i < (word.length - 1) / 2; i++) {
//         if (word[i] !== word[word.length - 1 - i]) {
//             return `${word} is not a palindrome!`;
//         }
//     }

//     return `${word} is a palindrome!`;
// }

// console.log(isPalindrome("radar"));
// console.log(isPalindrome("mom"));
// console.log(isPalindrome("redivider"));
// console.log(isPalindrome("redivide"));
// console.log(isPalindrome("rodeo"));
// console.log(isPalindrome("reviver"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("madam"));




/* find the maximum value in an array */
// take first value in array and assume its largest value
// iterate from second to last value in array and compare with current max value
// if value is larger than current maximum, set maximum to that value
// continue doing this until end of array and return current maximum

// function maxValue(arr) {
//     var max = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         var currentNum = arr[i];
//         if (max < currentNum) {
//             max = currentNum;
//         }
//     }
//     return max;
// }

// console.log(maxValue([6,9,11,13]));
// console.log(maxValue([6,9,11,13,25,6,1,7,-9,19,24]));

/* create a function that counts the number of vowels in a given string
*/

// create a function that takes string and converts string to lowercase
// create an array called vowels that hold aeiou and count = 0 to count number of vowels
// do for loop for each letter in sentence
// if vowels.includes(letter), increment count by 1 since we found a vowel
// do this until we have looped thru every letter in sentence
// return final count of vowels

// function countVowels(sentence) {
//     sentence = sentence.toLowerCase();
//     var totalVowels = 0;
//     var vowels = ["a", "e", "i", "o", "u"];
//     for (var i = 0; i < sentence.length; i++) {
//         if (vowels.includes(sentence[i])) {
//             totalVowels += 1;
//         }
//     }

//     return totalVowels;
// }

// console.log(countVowels("This is a sentence."))

/* 
Write a function that takes an array of integers as an input and outputs the first duplicate.

Ex:
Input: [ 2, 5, 6, 3, 5 ]
Output: 5

Input: [ 1, 3, 4, 1, 3, 4 ]
Output: 1

Input: [ 2, 4, 5 ]
Output: undefined

*/

// create an array with unique elements from original array
// take each element from unique array and count how many times it occurs in original array
// if the total of that element we are analyzing is larger than 1, return that letter
// if they are all unique, return undefined.

// function firstDuplicate(array) {
//     var uniqueArray = new Set(array);
//     for (value of uniqueArray) {
//         var total = 0;
//         for (var i = 0; i < array.length; i++) {
//             if (array[i] === value) {
//                 total += 1
//             }
//         }
//         if (total > 1) {
//             return value;
//         }
//     }
//     return undefined;
// }

// create array to store unique values
// iterate thru every value in original array and add to new unique value array if it is not in unique array
// if value is already in unique array, return that value
// if we find every value in original is unique, return undefined

// function firstDuplicate(array) {
//     var uniqueArray = [];
//     for (var i = 0; i < array.length; i++) {
//          if (!uniqueArray.includes(array[i])) {
//             uniqueArray.push(array[i]);
//         }
//         else {
//             return array[i];
//         }
//     }
//     return undefined;
// }


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums.includes(target-nums[i]) && i !== nums.indexOf(target-nums[i])) {
//             return [i, nums.indexOf(target-nums[i])]
//         }
//     }
// };

// Write a function that takes in an array of integers and the array with duplicates removed

// Ex:
// Input: [1,2,2,3]
// Output: [1,2,3]

// Input: [4,5,4,4,7,5]
// Output: [4,5,7]

// Input: [1,2,3,5]
// Output: [1,2,3,5]

// create an array to store unique values
// do a for loop where you iterate via each value in original array
// put value in unique array if it does not already exist
// return uniqueArray

// const removeDuplicates = (originalArray) => {
//     // const returnedArray = []; 
//     // && means if part 1 is true, then execute and return part 2, else dont execute part 2
//     // originalArray.forEach(item => (!returnedArray.includes(item)) ? returnedArray.push(item) : false)

//     returnedArray = originalArray.filter((value,i) => i === originalArray.lastIndexOf(value))
//     return returnedArray;
// }

// console.log(removeDuplicates([1,2,2,3]));
// console.log(removeDuplicates([1,23,4,5,6,7,12,22,2,22,23,3]));
// console.log(removeDuplicates([4,5,4,4,7,5]));

// find the first nonrepeating character in an array (assume all lower case letters)
// use filter method to filter only every unique value in an sentence
// do this by taking original sentence, add the filter method, iterate every value/index and see if index of that value is equal to last occuring index of that value
// creates new array of filtered values and return the first value in that index
// function firstNonRepeatingLetter(string) { 
//     let sentence = string.toLowerCase().replaceAll(' ', '').split('');
//     // return sentence;
//     //     returnedArray = originalArray.filter((value,i) => i === originalArray.lastIndexOf(value))

//     let nonRepeatingCharacters = sentence.filter((letter,indexOfLetter) => ());
//     return nonRepeatingCharacters;
// }
// console.log(firstNonRepeatingLetter("This is a test.")); //return h
// console.log(firstNonRepeatingLetter("this hat is the greatest!")); //return g
// console.log(firstNonRepeatingLetter("what a wonderful day it has been!"));

// **********************************************************************************

// write a function that takes in a string, and returns an object with key value pairs counting how many times each character occurred.

// EG. an input string "Hello World!" would result in an output of -
//  { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1, '!': 1 }
// create a variable to hold initial count and empty object to hold each letter/count
// do a forEach loop to loop through each letter
// if letter already exists in totalCount, increment its count else assign a 1
// return object

// function characterCount(string) {
//     const array = string.split('');
//     let totalCount = {};
//     array.forEach((letter) => totalCount[letter] ? totalCount[letter]++ : totalCount[letter] = 1)
//     return totalCount;
// }

// console.log(characterCount("Hello World!"));