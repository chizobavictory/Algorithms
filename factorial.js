/* When you factorialize a number, you are multiplying that number by each consecutive number minus one.
For example, factorials of 5 is 5 * 4 * 3 * 2 * 1 = 120. 
Create a function that returns the factorial of number passed as argument */

function factorial(num) {
  if(num < 0) return -1
  else if(num === 0) return 1
  else{num * factorial(num - 1)}
}

// console.log(factorialize(5)) => 120