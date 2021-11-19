// find last repeating element
// take input argument, make it lowerCase, replace all whitespaces, and split it
// use filter to filter out all letters in sentence by iterating thru each character and corresponding index
//if first occurence of character is not equal to last occurence of character, filter those characters
//return last index of filtered array which is the last repeating letter in filtered array
const lastRepeatingLetter = (sentence) => {
    let newArray = sentence.toLowerCase().replaceAll(' ','').split('');
    let filteredArray = newArray.filter((letter) => newArray.indexOf(letter) !== newArray.lastIndexOf(letter));
    return filteredArray[filteredArray.length-1];
}
