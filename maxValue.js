/* find the maximum value in an array */
// take first value in array and assume its largest value
// iterate from second to last value in array and compare with current max value
// if value is larger than current maximum, set maximum to that value
// continue doing this until end of array and return current maximum

function maxValue(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        var currentNum = arr[i];
        if (max < currentNum) {
            max = currentNum;
        }
    }
    return max;
}

console.log(maxValue([6,9,11,13]));
console.log(maxValue([6,9,11,13,25,6,1,7,-9,19,24]));