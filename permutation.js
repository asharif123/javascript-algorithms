// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

// describe("permutationSubstring", function() {
//   it(`should return true if given the strings "tbacowa" and "bat"`, function() {
//     var str = "tbacowa";
//     var sub = "bat";

//     var result = permutationSubstring(str, sub);

//     expect(result).to.eql(true);
//   });

//   it(`should return true if given the strings "nAtsuiPlwuan" and "Austin"`, function() {
//     var str = "nAtsuiPlwuan";
//     var sub = "Austin";

//     var result = permutationSubstring(str, sub);

//     expect(result).to.eql(true);
//   });

//   it(`should return false if given the strings "nnhsuieaero" and "summer"`, function() {
//     var str = "nnhsuieaero";
//     var sub = "summer";

//     var result = permutationSubstring(str, sub);

//     expect(result).to.eql(false);
//   });

//   it(`should return false if given the strings "octmantisplantic" and "atlantic ocean"`, function() {
//     var str = "octmantisplantic";
//     var sub = "atlantic ocean";

//     var result = permutationSubstring(str, sub);

//     expect(result).to.eql(false);
//   });
// });

//STEPS:
//take each letter in sub and create object, if letter is in object increment its count, else assign to 1
//loop through each letter in str and if letter in sub exists, decrement its count
//at end of for loop, do another for loop on sub and see if each letter in sub is equal to count of 0 (0 occurences) in object
//if the count of letters in object is greater than 0 for any letter in object, return false
//else if count of every letter in object is 0, return true

const permutationSubstring = (str, sub) => {
    let subLetters = {};
    for (let i = 0; i < sub.length; i++) {
        if (subLetters[sub[i]]) {
            subLetters[sub[i]]+=1
        }
        else {
            subLetters[sub[i]]=1

        }
    }

    

    for (let i = 0; i < str.length; i++) {
        if (subLetters[str[i]]) {
            subLetters[str[i]]-=1
        }
    }
    

    for (let i = 0; i < sub.length; i++) {
        if (subLetters[sub[i]] > 0) {
            return false;
        }
    }

    return true;

    
    
};

console.log(permutationSubstring("tbacowa", "bat"))
console.log(permutationSubstring("nAtsuiPlwuan", "Austin"))
console.log(permutationSubstring("nnhsuieaero", "summer"))
console.log(permutationSubstring("octmantisplantic", "atlantic ocean"))