function reverseWords(str) {
    // Go for it
    const arr = str.split(" ")
    const result = [];
    for (let i = 0; i<arr.length; i++){
        let word = (arr[i].split("")).reverse();
        result.push(word.join(""));   
    }
    return result.join(" ")
  }

console.log(reverseWords("Hello Baby!"))