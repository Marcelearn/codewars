const array = [9, 1, 2, 5]

function getMaxOfArray(arr) {
    return Math.max(...arr);
}
console.log(getMaxOfArray(array))

function minMax(arr){
    return [Math.min.apply(null, arr), Math.max.apply(null, arr)]; // fix me!
}
console.log(minMax(array))

const numbers = ("3 2 1")
function highAndLow(num){
    let str = parseInt(num, 10)
    console.log(str)
    return Math.max(str) +  Math.min(str) //, Math.min(numbers)
}

console.log(highAndLow(numbers))
console.log(parseInt(numbers, 10))

function sum (arr){
    return array.reduce(function(a,b){return a+b;})
    
}
console.log(sum(array))