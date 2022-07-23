function removeExclamationMarks(s) {
    //return s.replace("!", "");
    return s.split("!").join("")
    
}
  console.log(removeExclamationMarks(`hola!!!`))