/* Given an integer, return an integer with the digits reversed taking into consideration negative numbers*/
function reverseInt(n){
  let integer = n.toString().split("").reverse().join("")
  return parseInt(integer)
}

console.log(reverseInt(-2234));