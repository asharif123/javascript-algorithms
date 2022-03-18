//Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

//The first mission: Traversing arr, find the shortest string length.

//The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

const cutIt = (arr) => {
        //coding here...
    let minWordLength = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
      if (minWordLength > arr[i].length) {
        minWordLength = arr[i].length
      }
    }
    
    let newArr = arr.map(x => x.slice(0, minWordLength))
    return newArr;

}