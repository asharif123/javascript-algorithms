//Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

// Please return the gap between the first position of c and the last position of c.

// If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.

const firstToLast = (str,c) => {
    //coding here..
    if (str.indexOf(c) === -1) {
      return -1;
    }
    else if (str.indexOf(c) === str.lastIndexOf(c)) {
      return 0;
    }
    
    else {
      return (str.lastIndexOf(c) - str.indexOf(c))
    }
  }