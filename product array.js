// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

function productArray(numbers){
  //your code here
  let arr = []
  let num
  for(let i = 0; i < numbers.length;i++){
    let res = [...numbers]
    res.splice(i, 1)
    num = res.reduce((a,b)=> a*b)
    arr.push(num)
  }
  return arr
}