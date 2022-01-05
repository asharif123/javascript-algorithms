const singleNumber = (array) => {
    if (array.length === 1) {
        return array[0]
    }

    for (let i = 0; i < array.length; i++) {
        if (i === array.indexOf(array[i]) && array.indexOf(array[i], i+1) === -1) {
            return array[i]
        }
        
    }
}

console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([2,2,1]))
console.log(singleNumber([1]))