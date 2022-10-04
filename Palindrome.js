/* Given a string, return true or false depending if the string is a palindrome. Palindromes are words that read the sme backwards and forwards.Make sure it is case insensitive  */

function palindrome(str){
  str = str.toLowerCase()
  const reversed = str.split("").reverse().join("")

  return (str === reversed) ? true : false 
}

console.log(palindrome("Madam")); 