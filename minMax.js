const array = [9, 1, 2, 5]

function getMaxOfArray(arr) {
    return Math.max(...arr);
}
console.log(getMaxOfArray(array))

function minMax(arr){
    return [Math.min.apply(null, arr), Math.max.apply(null, arr)]; // fix me!
}

console.log(minMax(array))
function sum (arr){
    return array.reduce(function(a,b){return a+b;})
    
}
console.log(sum(array))