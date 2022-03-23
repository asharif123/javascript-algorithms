// \\Coding in function fiveLine, function accept 1 parameter:s. s is a string.

// Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

// Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

// Note2: Using a string template can make your job easier.

//Ex:

//fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"

const fiveLine = (s) => {
    //coding here...
    let newLineStr = '';
    let sTrimmed = s.trim().split(' ');
    for (let i = 1; i < 6; i++) {
      newLineStr += sTrimmed[0].repeat(i) + '\n'
    }
    return newLineStr.slice(0, newLineStr.length-1);
  }