/* In this activity you will be writing code to create a function that takes in a string and determines whether or not 
it is a palindrome. A **palindrome** is any string spelled the same forwards as it is backwards. */

// ex: radar, mom, dad are palindromes
// create a function to determine if word is palindrome or not
// make the word lowercase
// a word is palindrome if first letter is equal to last, second letter is equal to second to last, etc.
// if we hit letter that is not equal to its compliment, its not palindrome
// we iterate until we hit middle letter and if we find each letter is equal to its compliment, it's palindrome

const isPalindrome = (word) => {
    word = word.toLowerCase();
    for (let i = 0; i < (word.length - 1) / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return `${word} is not a palindrome!`;
        }
    }

    return `${word} is a palindrome!`;
}

console.log(isPalindrome("radar"));
console.log(isPalindrome("mom"));
console.log(isPalindrome("redivider"));
console.log(isPalindrome("redivide"));
console.log(isPalindrome("rodeo"));
console.log(isPalindrome("reviver"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("madam"));