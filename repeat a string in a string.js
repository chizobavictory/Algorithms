/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method. */

function repeatStringNumTimes(str, num) {
  if(str < 0){return ""}
  let repeat = ""
  while (num > 0){
    repeat += str
    num--
  }
  
  return repeat;
}

repeatStringNumTimes("abc", 3);

