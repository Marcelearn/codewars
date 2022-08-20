function doubleChar(str) {
    // Your code here
    var newStr = "";
    for(let i = 0; i < str.length; i++){
        newStr += str[i] + str[i];
    }
    return newStr;
  }
console.log(doubleChar("Abcd"))

// const doubleChar = (str) => str.split("").map(c => c + c).join("");