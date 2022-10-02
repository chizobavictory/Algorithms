/*The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of all previous terms.*/

function fibonnaci(num){
    if(num <= 1) return 1;
    return fibonnaci(num - 1) + fibonnaci(num - 2);
}

console.log(fibonnaci(7));

