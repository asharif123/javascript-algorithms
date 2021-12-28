// Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

// Here is the algorithm:

// Double every other digit, scanning from right to left, starting from the second digit (from the right).

// Another way to think about it is: if there are an even number of digits, double every other digit starting with the first; 
//if there are an odd number of digits, double every other digit starting with the second:

// 1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]

// 12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]

// 891 ==> [8, 9*, 1] ==> [8, 18, 1]
// If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):

// [8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]

// or:

// [8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
// Sum all of the final digits:

// [8, 9, 1] ==> 8 + 9 + 1 = 18
// Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.

// Test.assertEquals(validate(123), false);
// Test.assertEquals(validate(1), false);
// Test.assertEquals(validate(2121), true);
// Test.assertEquals(validate(1230), true);

//STEPS
//create a function that takes in a positive integer and convert to string then split to iterate via each value 
//NOTE: each value will initially be a string so convert back to integer before doing steps 3 and 4
//if length of split list is odd, only double the value in each odd indexed value.
//if length of split list is even, double value in each even indexed value.
//after doing steps 3 or 4 depending on length of array, use .map to take each value and map to new array
//at end of for loop, do another iteration to see if any value in split list is double digits (first convert each value to str)
//if the length of any digit is greater than 1, take that value, convert back to int, subtract by 9, and put it back in array
//finally, sum all the values remaining and divide by 10, if remainder is 0 it's valid else it's false

const creditCardValidator = (number) => {
    const stringNumber = number.toString().split('');
    let mappedStringNumber = stringNumber.map((value, index) => {
        //IF LENGTH OF NUMBER IS EVEN
        if (stringNumber.length % 2 === 0) {
            if (index % 2 === 0) {
                return parseInt(stringNumber[index]) * 2;
            }
            else {
                return parseInt(stringNumber[index])
            }
        }
        //IF LENGTH OF NUMBER IS ODD
        else {
            if (index % 2 === 1) {
                return parseInt(stringNumber[index]) * 2;

            }
            else {
                return parseInt(stringNumber[index])
            }
        }
    })
    let newArray = mappedStringNumber.map((value, index) => {
        return mappedStringNumber[index].toString().length > 1 ? mappedStringNumber[index] - 9 : mappedStringNumber[index]
    })
    let total = 0;
    for (let i = 0; i < newArray.length; i++) {
        total += newArray[i];
    }

    return total % 10 === 0;
}

console.log(creditCardValidator(123));
console.log(creditCardValidator(1));
console.log(creditCardValidator(2121));
console.log(creditCardValidator(1230));
console.log(creditCardValidator(898098080800080980971));

