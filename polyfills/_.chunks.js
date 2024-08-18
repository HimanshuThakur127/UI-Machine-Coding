const chunk = (arr, size) => {
    if(!Array.isArray(arr) || size < 0) throw new Error("Invalid Arguments");
    let result = [];
    let index = 0;
    while(index < arr.length){
      let sub = []
      for(let y = index; y<index+size;y++){
          if(arr[y])sub.push(arr[y]);
      }
      result.push(sub);
      index+=size;
    }
    return result;
  }
  
  // Usage examples
  console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
  console.log(chunk([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
  console.log(chunk([1, 2, 3, 4, 5], 5)); // [[1, 2, 3, 4, 5]]
  console.log(chunk([1, 2, 3, 4, 5], 1)); // [[1], [2], [3], [4], [5]]