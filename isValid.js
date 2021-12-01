// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

// Input s = ({[]})
// output: true
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// create an empty list to hold all opening parentheses, square and curly brackets
// do a for loop and add each opening parentheses, square and curly brackets that is encountered
// if we enounter its corresponding closing parentheses, square or curly brackets and last element is its:
// cont: corr opening parentheses, square and curly brackets, remove corr opening bracket from array
// at end of for loop, if array is empty, return true meaning it's balanced
// if not empty return false

const isValid = (characters) => {
    const openingBrackets = [];
    for (let i = 0; i < characters.length; i++) {
        if (characters[i] === "(" || characters[i] === "[" || characters[i] === "{") {
            openingBrackets.push(characters[i]);
        }

        // else if we encounter ")" and last element in array is corresponding ")", remove from array
        
    }

        

}