/* create a function that counts the number of vowels in a given string
*/

// create a function that takes string and converts string to lowercase
// create an array called vowels that hold aeiou and count = 0 to count number of vowels
// do for loop for each letter in sentence
// if vowels.includes(letter), increment count by 1 since we found a vowel
// do this until we have looped thru every letter in sentence
// return final count of vowels

function countVowels(sentence) {
    sentence = sentence.toLowerCase();
    var totalVowels = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < sentence.length; i++) {
        if (vowels.includes(sentence[i])) {
            totalVowels += 1;
        }
    }

    return totalVowels;
}

console.log(countVowels("This is a sentence."))
