const string = `heLLo WoRLD`;

function toAlternatingCase(str){
    // Define your method here :)
    str.split("")
    const result= [];
    for(let i = 0; i<str.length; i++){
        if(str[i]=== str[i].toLowerCase()){
            result.push(str[i].toUpperCase);

        }else{
            result.push(str[i].toLowerCase);
        }
    }
    return result.join("");
    
  }
console.log(toAlternatingCase(string));