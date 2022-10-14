//You are given an array of integers. Group the similar integers together and return the array of arrays.

let arr = ["1", "13", "5", "8", "10", "22", " 3"];

function similarArr(arr) {
  let sortedArr = arr.sort((a, b) => a - b).map((a) => +a);
  // sortedArr;
  let group = [];
  let tempArr = [];

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      tempArr.push(sortedArr[i]);
    } else {
      tempArr.push(sortedArr[i]);
      group.push(tempArr);
      tempArr = [];
    }
  }
  return group
}
console.log(similarArr(["1", "1", "13", "5", "8", "10", "22", " 3", "13", "5"]));