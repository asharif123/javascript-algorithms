  // Implement strStr().
  
  // Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
  
  // Clarification:
  
  // What should we return when needle is an empty string? This is a great question to ask during an interview.
  
  // For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
  
   
  
  // Example 1:
  
  // Input: haystack = "hello", needle = "ll"
  // Output: 2
  // Example 2:
  
  // Input: haystack = "aaaaa", needle = "bba"
  // Output: -1
  // Example 3:
  
  // Input: haystack = "", needle = ""
  // Output: 0

  //can we assume needle and haystack are empty
  // create function that takes in 2 parameters (needle and haystack)
  //if needle is empty string, return 0

  // use .includes() to compare if needle is in haystack
  // if yes, return the first Index occurence of needle in haystack
  // else, return -1

  const needleHayStack = (needle,haystack) => {
    if (haystack.length === 0) {
      return 0;
    }

    if (needle.includes(haystack)) {
      return needle.indexOf(haystack);
    }

    else {
      return -1
    }
  }

  console.log(needleHayStack("hello", "ll"));
  console.log(needleHayStack("aaaaa", "bba"));
  console.log(needleHayStack("", ""));
 