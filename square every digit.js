// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


function squareDigits(num){
  let string = num.toString()
  let result = []
  for(let i= 0; i < string.length; i++){
    result[i] = string[i] ** 2
  }
  return Number(result.join(""));
}

// console.log(squareDigits(9119)) => 811181