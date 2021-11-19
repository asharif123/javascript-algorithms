// find the first nonrepeating character in an array (assume all lower case letters)
// use filter method to filter only every unique value in an sentence
// do this by taking original sentence, add the filter method, iterate every value/index and see if index of that value is equal to last occuring index of that value
// creates new array of filtered values and return the first value in that index

// objective: filter all unique letters from array
// use the filter function to filter all unique letters
//since we don't care about whitespace, replace all whitespace in the sentence and make setence lowercase
// using filter function, iterate thru each character in sentence once it has been split
// if index of that character is equal to indexOf of first occurence of that letter and 
//there are no more occurences of that letter after we find first occurence, we know it's unique and keep it
// get the first index of that sentence to get first non repeating letter.
const firstNonRepeatingLetter = (sentence) => {
    const newArray = sentence.toLowerCase().replaceAll(' ', '').split('');
    const splitArray = newArray.filter((character, index) => index === newArray.indexOf(character) && newArray.indexOf(character, index+1) === -1)
    return splitArray[0];
}

console.log(firstNonRepeatingLetter("This is a test.")); //return h
console.log(firstNonRepeatingLetter("this hat is the greatest!")); //return g
console.log(firstNonRepeatingLetter("what a wonderful day it has been!")); //return o