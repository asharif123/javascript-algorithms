//Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

// For example:

// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d


//STEPS
//take the string and split it as split('')
//use .map to match each split word and split it again
//once each word is split, join each split word with the separator
//take the entire split list and join it with its separator
const splitAndMerge = (string, separator) => {
  
    return string.split(" ").map(word => word.split("").join(separator));
  }