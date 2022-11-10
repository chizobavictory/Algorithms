function check(str){
if(str.length < 4) str.length === 0? "" : str
return str.slice(-4).padStart(str.length, '#')

}
console.log(check('232437896'));
console.log(check('8966'));
console.log(check(''));
console.log(check('1'));

