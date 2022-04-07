// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

// We translate the sentence into an alien language according to the following rules:

// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? 
// Because this is the form of alien language ;-)


// function alienLanguage(str){
//     //coding here...
//     //take the original str and split it by split(' ')
//     //create an empty ssntence to store each word we loop on having upper case on all ex
//     //cept last letter
//     //do a for loop on each split word
//     //take each word and using slice, capitalize all letters and add last letter to it and 
//     // add white space at end of each word
//     //add the newly created word to the empty string to create new sentence
//     //do this until every word has been added to the sentence
//     //replace the last character in sentence with empty string and return sentence
//     let newStr = str.split(' ');
//     let newSentence = '';
//     for (let i = 0; i < newStr.length; i++) {
//       newSentence += newStr[i].slice(0, newStr[i].length-1).toUpperCase() + newStr[i][newStr[i].length-1].toLowerCase() + ' ';
//     }
//     return newSentence.trim();
    
//     }

//another solution
const alienLanguage = (str) => {
    //coding here...
    //take the original str and split it by split(' ')
    // use map to map each split word and use slice to slice all letters except last one
    // uppercase all letters except last, lowercase last letter and add space after each word
    //use .join to join as one sentence and trim to get rid of whitespace beginning and end
    //return new sentence
    return str.split(' ').map(word => word.slice(0, word.length-1).toUpperCase() + word[word.length-1].toLowerCase() + ' ').join('').trim()
    
}
  
  