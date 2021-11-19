    // - Print all numbers from the given `num` argument to `1`, inclusive.



// take a value and ensure it's positive
// use for loop to decrement value by 1 and print each value including 1
function countDown(value) {
    for (var i=value; i > 0; i--) {
        console.log(i);
    }
}

countDown(10);