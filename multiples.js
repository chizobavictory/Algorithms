/*Create a function that takes in to parameters (x, y) and return the multiples of the first parameter with the value of the second */

function multiples(x, y){
let res = [...Array(y)].map((_, i) => x * ++i)
    return res
}

console.log(multiples(2, 4)); //[ 2, 4, 6, 8 ]