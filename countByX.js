function countBy(x, n) {
    let z = [];
    for(let i = 0; z.length<n; i++){
      z += z[i]
    }
  
    return z;
}

console.log(countBy(1, 10))

// var countSheep = function (num){
//     //your code here
//     let val = ``;
//     for(let i=1; i<=num; i++){
//        val += `${i} Sheeps...`
//     }
//    return val;
    
//   }