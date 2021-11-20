// user inputs value and convert it to positive value
// use for loop to loop from 1 up to that value inclusive and print each value

const printNumbers = (value) => {
    value = Math.abs(value);
    for (let i = 1; i <= value; i++) {
        console.log(i);
    }
}

printNumbers(5);
printNumbers(15);
printNumbers(25);