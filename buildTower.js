// function tower_builder(floors){
//     let space,star, tower = [];
//     for(i = 1; i <= floors; i++){
//       space = " ".repeat(floors - i);
//       star  = "*".repeat((2*i) - 1);
//       tower.push(`${space}${star}${space}`);
//     }
//     return tower;
//   }


function towerBuilder(nFloors) {
    // build here
    var tower = [];
    for (var i = 0; i < nFloors; i ++){
        tower.push(" ".repeat(nFloors - i - 1)
        + "*".repeat((i * 2)+ 1)
        + " ".repeat(nFloors - i - 1))
    }
    return tower;
}
console.log(towerBuilder(5));