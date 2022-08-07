function squareDigits(num){
    const arr= num.split(``)
    let raices= arr.map(function(val){return val*val})
    return raices.join("");
  }
const numero = "3212";
console.log (squareDigits(numero))

function squareDigits(num){
    return +num.toString().split(``).map(function(val){return val*val}).join("");
    
  }