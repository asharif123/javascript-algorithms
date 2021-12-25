// # Concert Flyer

// In this activity you will be writing code to create a function that takes in two strings: a concert flyer and a magazine. You will be checking if the words in the concert flyer could have been clipped from the magazine, e.g. if every instance of each word in the second string is found in the first string, return `true`, else return `false`.

// ## Instructions

// * Open [Unsolved/concert-flyer.js](Unsolved/concert-flyer.js) in your code editor&mdash;this is the only file you will modify in this activity.

//   * In this file you will be writing code in the body of the `concertFlyer` function to achieve the following:

//     * If every instance of each word in the second string is found in the first string, return `true`, else return `false`.

//     * See the following strings for an example:

//       ```js
//       var magazine = 'hello world';
//       var flyer = 'hello';
//       ```

//     * Given the preceding strings, the following should be returned:

//       ```js
//       true;
//       ```

//     * For another example, see the following strings:

//       ```js
//       var magazine = 'Whats so amazing that keeps us stargazing';
//       var flyer = 'stargazing whats keeps us so amazing';
//       ```

//     * Given the preceding strings, and because the word "Whats" is capitalized differently in each string, the following should be returned:

//       ```js
//       false;
//       ```

//     * Assume that neither string will be empty and that you won't need to deal with punctuation, but you will need to worry about capitalization.

// * You can check whether your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

//   * Functions that pass the tests will be denoted with a green check mark.

//   * Functions that fail the tests will be denoted with a red X and an error message.


// ---
// © 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

//STEPS
//create a function that takes in 2 strings
//take each inputted string and split it by its whitespace
//do a for loop on the second string that has been split
//if any word we iterate on second array does not exist in first array, return false and end the loop
//otherwise if we reach end of for loop, return true

const commonFlyer = (stringA, stringB) => {
    const firstString = stringA.split(' ');
    
    const secondString = stringB.split(' ');
    // console.log(firstString, secondString)
    for (let i = 0; i < secondString.length; i++) {
        if (!firstString.includes(secondString[i])) {
            return false
        }
    }
    return true
    
}
console.log(commonFlyer('Whats so amazing that keeps us stargazing', 'stargazing whats keeps us so amazing'))
console.log(commonFlyer('hello world', 'hello'))
var magazine = 'I\'ve got a lovely bunch of coconuts';
var flyer = 'I\'ve got some coconuts';
console.log(commonFlyer(magazine, flyer))


