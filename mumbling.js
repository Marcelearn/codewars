function accum(s) {
    var letters = s.split(''), words = [];
  
    for(var i = 0; i < letters.length; i++) {
      words.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
    }
  
    return words.join('-');
  }

//   function accum(s) {
//     return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
//   }
const word = "abcd";
console.log(accum(word))