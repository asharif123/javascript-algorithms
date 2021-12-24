// 13. Roman to Integer
// Easy

// 2588

// 178

// Add to List

// Share
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 
//12 is written as XII, which is simply X + II. 
//The number 27 is written as XXVII, which is X + X + V + I + I.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. 
//Instead, the number four is written as IV. Because the one is before the five we subtract it making four. 
//The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV" => "M CM XC IV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

//STEPS:
//take an input string from a user
//create an object matching each roman numeral to a number (ex: {I: 1, X: 10, etc.})
//create a variable name total to store the total value of the converted roman numerals
//do a for loop to loop through each split letter of input string
//for each letter we are currently on, if letter coming after has a numeric value larger than the current letter we are at:
//subtract the value of current value we are on from numeric value of roman letter coming after current roman letter and add to total variable
//also skip over letter besides current letter to ensure we dont readd it
//else if letter coming after has a value that is NOT larger than value of current letter we are on:
//take value of letter we are currently on and add to total
//return total at end of for loop

const romanInteger = (symbols) => {
    let mappedRomanIntegers = {
        'I': 1, 'V':5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    }

    let convertedValue = 0;
    for (let i = 0; i < splitSymbols.length; i++) {
        if (mappedRomanIntegers[symbols[i]] < mappedRomanIntegers[symbols[i+1]]) {
            convertedValue +=  mappedRomanIntegers[symbols[i+1]] - mappedRomanIntegers[symbols[i]]
            //for this case, skip over next letter besides previous letter so we don't accidentally add it
            i++
        }
        else {
            convertedValue += mappedRomanIntegers[symbols[i]]
        }
    }

    return convertedValue;
}

console.log(romanInteger('III'));
console.log(romanInteger('LVIII'));
console.log(romanInteger('MCMXCIV'));
