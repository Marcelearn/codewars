function findOdd(arr){
    for (var i = 0; i < arr.length; i++){
        
        let count = arr.filter(value => value === arr[i]).length;
        if (count % 2 == 1) {
            return arr[i];
        }
    }
    return -1;
    
}
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));