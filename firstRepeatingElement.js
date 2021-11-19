// find first repeating element (assume input is string)
// //filter out all repeating elements in the sentence
// //first convert sentence to lowercase, replace all empty spaces, and convert to lowercase, them split 
// //using filter, iterate thru each character in array
// //filter out characters if indices after current character we are analyzing exists
// //return first index in filtered array
const firstRepeatingLetter = (sentence) => {
    const newArray = sentence.toLowerCase().replaceAll(' ', '').split('');
    const filteredArray = newArray.filter((letter) => newArray.indexOf(letter) !== newArray.lastIndexOf(letter))
    return filteredArray[0];     
}

console.log(firstRepeatingLetter("James Reiher")); //e
console.log(firstRepeatingLetter("First Repeating Letter")); //i
console.log(firstRepeatingLetter("Geeks for Geeks")); //g