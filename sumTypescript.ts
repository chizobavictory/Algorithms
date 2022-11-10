function sum(x:number):number {
    return 2 + x
}

console.log(sum(10))

// Write a function that adds or subtracts 1 from a number. Argument 1 is the number. Argument 2 is a boolean. When it's true, add; otherwise, subtract.

type TakesNumberReturnsNumber = (n: number) => number;
const myAdd1: TakesNumberReturnsNumber = add1;
myAdd1(3);