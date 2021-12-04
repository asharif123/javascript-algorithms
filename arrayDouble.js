// Write a function that takes an array of numbers and returns an array with each even number doubled, odd numbers will not change. 

// Ex:
// Input: [1,2,3]
// Output: [1,4,3]

// Input: [-1,-2,-3]
// Output: [-1, -4, -3]

// Input: [4,6,10]
// Output: [8,12,20]

//create a function that takes an array
//use the map function to map old to new array
//if any number we encounter is divisible by 2, double it else leave as it is
//return the new array

const arrayDouble = (array) => {
    const newArray = array.map(value => {
        return value % 2 == 0 ? value * 2 : value
    })

    return newArray;
}

console.log(arrayDouble([1,2,3]));
console.log(arrayDouble([-1,-2,-3]));
console.log(arrayDouble([4,6,10]));