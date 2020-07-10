let now = new Date();
showMessage(now.toDateString());

let today = new Date();
showMessage(today.getSeconds());
console.log(Date());

let tmr = new Date(2020, 6, 8);
console.log(tmr);
showMessage(tmr.setDate(24));
console.log(tmr.setDate(24));
//-------------------------------------------------------
//watch string mehtods, array methods, math , number,date
//Math
showMessage(Math.abs(-42));

function calculate(radius){
    return 2*Math.PI * radius;
}
showFunctions(calculate(3));


//Number built-in methods
function integer(x,y){
    if(Number.isInteger(y/x)){
        return 'fits';
    } else{
        return 'not am integer';
    }
}
showFunctions(integer(5,10));  //output:fits

showFunctions(integer(5,11)); //output : not an integer

//builtin NaN
function typeOfNaN(x) {
    if (Number.isNaN(x)) {
      return 'Number NaN';
    }
    if (isNaN(x)) {
      return 'NaN';
    }
  }
  
  console.log(typeOfNaN('100F'));
  // expected output: "NaN"
  
  console.log(typeOfNaN(NaN));
  // expected output: "Number NaN"

//parseInt method ex
function inte(x, y){
    return Number.parseInt(x,y);
}

showFunctions(inte('10F', 12));

//string methods
//charAt
const sentence = "this is prathyusha";
let index = 8;
console.log(`chracter at ${index} is ${sentence.charAt(index)}`);

//concat
const str1="hello";
const str2="world";

console.log(str1.concat(' ', str2));
console.log(str2.concat(' ', str1));
console.log("".concat(' ',  str1));

let greetList = ['Hello', ' ', 'Venkat', '!']
"".concat(...greetList)  // "Hello Venkat!"

//includes
const str = 'To be, or not to be, that is the question.' 

console.log(str.includes('To be'))        // true
console.log(str.includes('question'))     // true
console.log(str.includes('nonexistent'))  // false
console.log(str.includes('To be', 1))  
console.log(str.includes('TO BE'))  

const sent="this palce is so nice to relax and meditate";
const word="relax";
console.log(`The word "${word}" is ${sent.includes(word) ? 'is': 'isnot'} in the sentence`);

//indexOf
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"

//repeat
const name ="prathyusha\ reddy";
console.log(`repeat the name prathyusha :${name.repeat(5)}`);

//replace
const p = "this is pink yellow orange blue brown pink ";
const regex= /pink/gi;
console.log(p.replace(regex, 'violet'));

//slice
const strr = 'The quick brown fox jumps over the lazy dog.';

console.log(strr.slice(4));
console.log(strr.slice(4, 19));

console.log(strr.slice(-4));
console.log(strr.slice(-9, -5));

//split
const str5 = 'The quick brown fox jumps over the lazy dog.';
const wordd = str5.split(" ");
console.log(wordd[3]);

const char = str5.split('');
console.log(char[8]);
const strCopy = str.split();
console.log(strCopy);