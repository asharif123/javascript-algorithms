const threeInOne = (arr) => {
    let result = [];
    for(var i=0;i<arr.length;i+=3) {
      result.push(arr[i] + arr[i+1] + arr[i+2]);
    }
    return result
  }