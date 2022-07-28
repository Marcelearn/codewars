function rentalCarCost(d) {
    // Your solution here
    if(7<= d){
      return (40*d)- 50;
    }if(3<= d){
      return (40*d)- 20;
    }else{
      return 40 * d
    }
  }
  const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));