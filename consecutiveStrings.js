
const strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
const k = 2

console.log(" longestConsec " + longestConsec(strarr, k));
function longestConsec(strarr, k) {
    if (strarr.length == 0 || k > strarr.length || k <= 0) return '';
    
    let longStr = '';
    
    let newStr = '';
    
    for (let i = 0; i < strarr.length; i++){
      newStr = strarr.slice(i, i+k);
      if (newStr.join('').length > longStr.length ){
        longStr = newStr.join('');
      }
    }
    
    return longStr;
}
console.log(" longestConsec " + longestConsec(strarr, k));