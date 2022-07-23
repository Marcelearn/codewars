var countSheep = function (num){
    //your code here
    let val = ``;
    for(let i=1; i<=num; i++){
       val += `${i} Sheeps...`
    }
   return val;
    
  }
console.log(countSheep(8))