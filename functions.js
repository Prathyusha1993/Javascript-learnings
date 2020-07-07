function logMessage(){
    console.log('in the function');
}
logMessage();
logMessage();

//function experssion
let myFn = function loggingFUnction() {
    console.log("this is finctiom experssion-");
}

myFn();

//passing info into function
let func = function sample(message1, message2){
    console.log(message1, message2);
}

func('hello', 'hi');

//function return values
function getSecretCode(value){
    let code = value*3;
    return code;    //or return value*3;  if we don't give return here means will get undefined 
}
showMessage(getSecretCode(23));
console.log(getSecretCode(90));

let key =42;
function getCode(value) {
     let keyGenerator = function(){
         let key=8;
         console.log('keygenerator:', key);
         return key;
     }
     let code = value * keyGenerator();
     console.log('getcode:', key);
     return code;
}

showMessage(getCode(12));
//------------------------------------------------------
function square(num){
    return num*num;
}
showFunctions(square(8));
//--------------------------------------------------------------
function myFunc(theObject) {
    theObject.make = 'Toyota';
  }
  
  var mycar = {make: 'Honda', model: 'Accord', year: 1998};
  var x, y;
  
  x = mycar.make; // x gets the value "Honda"
  
  myFunc(mycar);
  y = mycar.make; // y gets the value "Toyota"
  y = mycar.model;
  //--------------------------------

  function foo(x){
    //console.log(x);
  }
  const arr = new Array(1);
  console.log(arr);
  arr.length=2;
  arr.push(2);
  arr.push(0);
 
  for(const num in arr){
      foo(num);
      console.log(num);
      foo(arr[num]);
      console.log(num);
  }
  //-----------------------------
  //Function constructor 
  let multiply = new Function('x', 'y', 'return x*y');
//function declaration
function func_name(x,y) {
  return x*y;
}
//function expression 
let multiply1 =  function(x, y){
  return x*y;
}