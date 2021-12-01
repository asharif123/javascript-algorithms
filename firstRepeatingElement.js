// find first repeating element (assume input is string)
// //filter out all repeating elements in the sentence
// //first convert sentence to lowercase, replace all empty spaces, and convert to lowercase, them split 
// //using filter, iterate thru each character in array
// //filter out characters if indices after current character we are analyzing exists
// //return first index in filtered array
// const firstRepeatingElement = (sentence) => {
//     const newArray = sentence.toLowerCase().replaceAll(' ', '').split('');
//     const filteredArray = newArray.filter((letter) => newArray.indexOf(letter) !== newArray.lastIndexOf(letter))
//     return filteredArray[0];     
// }



// use for loop to iterate through each letter in sentence
// if index of letter we are currently at is NOT equal to last occurence of that letter, return that letter
// time: O(n), space: O(1)

const firstRepeatingElement = (sentence) => {
    for (let i = 0; i < sentence.length; i++) {
        if (i !== sentence.lastIndexOf(sentence[i])) {
            return sentence[i];
        }
    }
}

console.log(firstRepeatingElement("James Reiher")); //e
console.log(firstRepeatingElement("First Repeating Letter")); //i
console.log(firstRepeatingElement("Geeks for Geeks")); //g
console.log(firstRepeatingElement("Geeks for eeks")); //g