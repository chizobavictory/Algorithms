/* Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]*/

function largestOfFour(arr) {
  let max = []
 for(let i = 0; i < arr.length; i++){
   max.push(Math.max(...arr[i]))
 } return max
}