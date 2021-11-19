// write a function that takes in a string, and returns an object with key value pairs counting how many times each character occurred.

// EG. an input string "Hello World!" would result in an output of -
//  { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1, '!': 1 }
// create a variable to hold initial count and empty object to hold each letter/count
// do a forEach loop to loop through each letter
// if letter already exists in totalCount, increment its count else assign a 1
// return object

const characterCount = (string) => {
    const array = string.split('');
    let totalCount = {};
    array.forEach((letter) => totalCount[letter] ? totalCount[letter]++ : totalCount[letter] = 1)
    return totalCount;
}

console.log(characterCount("Hello World!"));

