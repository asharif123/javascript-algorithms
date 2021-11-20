// take a string and return its reverse
// ex: "Hello World!" should return !dlroW olleH"

// if length of string is 1, return that original string
//create an array to hold the reversed string
// use for loop to iterate from last character to first character in original string
// take each character starting from last character and add it to reversed string
// return reversed string

const reversedString = (string) => {
    let reverseString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        // console.log(string[i]);
        reverseString += string[i];
    }

    return reverseString;
}

console.log(reversedString("Hello World!"));