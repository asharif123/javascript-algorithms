// take each first letter and capitalize it!
// ex: this is a sentence. => This Is A Sentence.

// create a variable of empty string to hold the new sentence with capital letters
//take the input and split it by whitespace
// use for loop to take each word in new list generated from list
// capitalize the first letter of each word, also retain letters that come after first letter and add to new string
//return string

const capitalizeLetters = (sentence) => {
    let newSentence = '';
    let newArray = sentence.split(' ');
    for (let i = 0; i < newArray.length; i++) {
        newSentence += newArray[i][0].toUpperCase() + newArray[i].substring(1) + ' '
    }
    return newSentence;
}

console.log(capitalizeLetters("this is a sentence!"))
console.log(capitalizeLetters("welcome to the Jungle. Be safe out there!"))