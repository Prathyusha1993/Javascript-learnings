let person = {
    name: 'navithaa',
    age:34,
    partTime: false
};
showMessage(person.age);
console.log(person.name);
console.log(person.prtTime);
console.log(person['age']);

//object methods
let person1 = {
    name: 'navithaa',
    age:34,
    partTime: false,
    showInfo: function(firstName, oldAge){
        showMessage('this is method inside the object');
        showFunctions(firstName + 'is'+ oldAge);
    }
};

person1.showInfo();
person1.showInfo('pinky', 56);
showMessage(typeof person1.showInfo);

//passing objects to functions
//changing the string, boolean, inteeger will lost it won't change whereas when passing object it changes below are examples

//passing string but won't change
let message = 'hello';
function myFunc(message){
    message='hi';
}
myFunc(message);
showMessage(message); //OUTPUT WILL BE HELLO,

//passing object as agrument
let person2 = {
    name: 'navithaa',
    age:34,
    partTime: false};

function incrementAge(p){
    p.age++;
}
incrementAge(person2);
showMessage(person2.age);

//---------------------------------------------------------------------
function objFunc(obj){
    showFunctions(obj.email);
    showFunctions(obj.show);
}

objFunc({email:"react@example.com", show(){console.log("hi");}});

//=-------------------------------------------------------------------
//pass by value
function callByValue(varOne, varTwo) { 
    console.log("Inside Call by Value Method"); 
    varOne = 100; 
    varTwo = 200; 
    console.log("varOne =" + varOne +"varTwo =" +varTwo); 
  } 
  let varOne = 10; 
  let varTwo = 20; 
  console.log("Before Call by Value Method"); 
  console.log("varOne =" + varOne +"varTwo =" +varTwo); 
  callByValue(varOne, varTwo) 
  console.log("After Call by Value Method"); 
  console.log("varOne =" + varOne +"varTwo =" +varTwo); 
  
//   output will be : 
//   --------------- 
//   Before Call by Value Method 
//   varOne =10 varTwo =20 
//   Inside Call by Value Method 
//   varOne =100 varTwo =200 
//   After Call by Value Method 
//   varOne =10 varTwo =20
//-------------------------------------------------------------------

//pass by reference
function callByReference(varObj) { 
    console.log("Inside Call by Reference Method"); 
    varObj.a = 100; 
    console.log(varObj); 
  } 
  let varObj = {a:1};
  console.log("Before Call by Reference Method"); 
  console.log(varObj);
  callByReference(varObj) 
  console.log("After Call by Reference Method"); 
  console.log(varObj);

//   output will be : 
//   --------------- 
//   Before Call by Reference Method 
//   {a: 1} 
//   Inside Call by Reference Method 
//   {a: 100} 
//   After Call by Reference Method 
//   {a: 100}