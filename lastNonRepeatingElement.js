// find last nonrepeating element
// take sentence argument, convert to lowercase, replace ' ' with '' and split
// use filter function to filter all nonrepeating elements
// using filter to filter thru each character and index, 
//if current index we are at is equal to first occurence of current index and 
// no more occurences of the current character we are at after current index, filter them out
//return last index of filtered array
const lastNonRepeatingLetter = (sentence) => {
    const newArray = sentence.toLowerCase().replaceAll(' ', '').split('');
    const filteredArray = newArray.filter((letter, index) => index === newArray.indexOf(letter) && newArray.indexOf(letter, index+1) === -1)
    return filteredArray[filteredArray.length - 1]
}

console.log(lastNonRepeatingLetter("James Reiherxfiles")); //return l
console.log(lastNonRepeatingLetter("Welcome to the real world meh")); //return d
console.log(lastNonRepeatingLetter("what a wonderful day it has been")); //return b