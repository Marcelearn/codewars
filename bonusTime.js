function bonusTime(salary, bonus) {
    // your code here
      if (bonus){
        return `£` + (salary * 10).toString()
      }else{
      return `£` + salary.toString()
      } 
}
function bonusTime(salary, bonus) {
    return bonus ? `£${10 * salary}` : `£${salary}`;
  }