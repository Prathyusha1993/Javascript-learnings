/*alert("hello world");
  alert('comes as pop up');
  console.log("any message");*/

//   let total = 49.99;  //declaring a variable
//   let product = "hikng boots"; //declaring a string
//   let discounted = true;
//   showMessage(total);

let total = 189.99,
    product = 'hiking boots', 
    discounted = true; 
showMessage(product );

//valid variable anmes
//start with oneof: _, $, letters
//followed by zero or more: _, $, letter, number

//let keyword
let price;
console.log(price);
price = 89.99;
console.log(price);
price = 49.99;
showMessage(price);
console.log(price);

//const keyword once declared cannot change
const price = 59.99; //declaring a const means need to set up a value shouldn't leave it as empty
//price = 39; trying to change const value it gives error
showMessage(price);

//var keyword 
showMessage(price); //no error
var price = 25; 

//showMessage(price); //error says canot access before initialisation
//let price = 25; 
//best practise to use is let and const 
//----------------------------------------------------------------------


//blocking scope
let MY_FAV = 7;
if (MY_FAV === 7) { 
    // this is fine and creates a block scoped MY_FAV variable 
    // (works equally well with let to declare a block scoped non const variable)
    let MY_FAV = 20;
  
    // MY_FAV is now 20
    console.log('my favorite number is ' + MY_FAV);
  
    // this gets hoisted into the global context and throws an error
    //var MY_FAV = 20;
  }
  
  // MY_FAV is still 7
  console.log('my favorite number is ' + MY_FAV);
  //-----------------------------------------------------------------------------------


//const in object and arrays
  const MY_OBJECT = {'key': 'value'};
// Attempting to overwrite the object throws an error
// Uncaught TypeError: Assignment to constant variable.
MY_OBJECT = {'OTHER_KEY': 'value'};

// However, object keys are not protected,
// so the following statement is executed without problem
MY_OBJECT.key = 'otherValue'; // Use Object.freeze() to make object immutable

// The same applies to arrays
const MY_ARRAY = [];
// It's possible to push items into the array
MY_ARRAY.push('A'); // ["A"]
// However, assigning a new array to the variable throws an error 
// Uncaught TypeError: Assignment to constant variable.
MY_ARRAY = ['B'];
//-------------------------------

const array = [1,3,4];
array.push('f');
console.log(array);

const array1 = [{id:1, age:45}, {id:2, age:56}];
array1[0]={id:3, ag3:23};
console.log(array1);
//------------------------------------------------------------

function varTest() {
  var x = 1;
  {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}