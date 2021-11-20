// create a value and assign it to 0 (var total = 0)
// use for loop to iterate via each value in array
// return total after all values have been added to total

const sumValues = (values) => {
    let total = 0;
    for (let i = 0; i < values.length; i++) {
        total += values[i];
    }

    return total;
}

console.log(sumValues([3,5,1,2]));
console.log(sumValues([13,-5,11,3,6,3.42]));