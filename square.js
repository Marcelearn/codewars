function squareDigits(num){
    const arr= num.split(``)
    let raices= arr.map(function(val){return val*val})
    return raices.join("");
  }
const numero = "123";
console.log (squareDigits(numero))