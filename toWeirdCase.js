// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. 
// The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg cAsE"

// take the word and split it
// use .map to iterate thru each letter and if its even indexed add its capital letter to new variable, else add original letter
// take the mapped element, use .join() to combine as string, and return the new word

// const isWeirdCase = (sentence) => {
//     const splitSentence = sentence.split(' ');
//     const newWord = splitSentence.map((word) => {
//         const letters = word.split('');
//         const newLetters = letters.map((letter, index) => {
//             return (index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase());
//         })
//         return newLetters.join('');
//     })

//     return newWord.join(' ');


// }

const isWeirdCase = (sentence) => {
    const splitSentence = sentence.split('');
    const newList = splitSentence.map((letter, index) => {
        return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
    })
    return newList.join('');
}

console.log(isWeirdCase("This is a String!"));
console.log(isWeirdCase("Weird string case"));
console.log(isWeirdCase("String"));

