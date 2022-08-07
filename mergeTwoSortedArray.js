function mergeArrays(arr1, arr2) {
   let arr = arr1.concat(arr2)
   for (var i = arr.length -1; i>=0; i--){
    if(arr.indexOf(arr[i]) !== i) arr.splice(i,1);
   }
   arr.sort (function (a, b){
    return a - b;
   });
   return arr;

  }

  console.log(mergeArrays([1, 2, 3, 4, 9, 5], [1, 6, 7, 8, 9, 10])) 

