//operation percedence  paranthesis forst 1)multiplication
//2)division 3)reminder 4)addition 5)subtraction happen from left to right
let value = 3 + 3 *8;
showMessage(value);
console.log(value);

let num = (4+6)*6/5;
showMessage(num);

let num1 = 20 - (-2);
console.log(num1);

let amount = 0;
showMessage(--amount);

//Strings
let message="hello \"world\"";
console.log(message);

let name= "pinky";
let message1 = `hello ${name}`;
showMessage(message1);
console.log(message1);

let message2 = "hello";
message2 = message2 + "world";
showMessage(message2);
message2 = message2.toUpperCase();
showMessage(message2);
message2 = message2.substring(1);
showMessage(message2);

let message3 = '123';
console.log(message3 + 2); //output is 1232 as 123 is string

let msg=123;
console.log(msg+4); //output is 127 as 123 is num

var mystring = 'alpha';
mystring += 'bet'; // evaluates to "alphabet" and assigns this value to mystring.

//converting string and numbers
let amount2 = 124; //here it is num
amount2 = amount2.toString();
showMessage(typeof amount2); //here changes to string

let amount1 = Number.parseFloat("128.99"); //converts this string num into a number
showMessage(amount1);

//boolean variables
let saved = true;

showMessage(saved); //output true
showMessage(typeof saved); //output boolean
saved = !saved;
showMessage(saved); //output false

let save=10;
save=null;
showMessage(save);
console.log(save);

//objects and symbols
let person ={
    firstName:"prathyusha",
    lastName: "kurigala"
};
showMessage(person);
showMessage(person.firstName);
console.log(typeof person);
//------------------------------------------------------------
//ternery operator:
let age=2;
var status = (age >= 18) ? 'adult' : 'minor';
console.log(status);
//-----------------------------------------
//urenary operator
x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4;    // create property h
delete x;       // returns true (can delete if declared implicitly)
delete y;       // returns false (cannot delete if declared with var)
delete Math.PI; // returns false (cannot delete predefined properties)
delete myobj.h; // returns true (can delete user-defined properties)
delete myobj;   // returns true (can delete if declared implicitly)

var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
delete trees[3];
console.log(trees);
//------------------------------------------------------
//relational operator
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
console.log(0 in trees);        // returns true
console.log(3 in trees);        // returns true
console.log(6 in trees);        // returns false
console.log('bay' in trees);    // returns false (you must specify the index number,
                   // not the value at that index)
console.log('length' in trees); // returns true (length is an Array property)

// built-in objects
console.log('PI' in Math);          // returns true
var myString = new String('coral');
console.log('length' in myString);  // returns true

// Custom objects
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
console.log('make' in mycar);  // returns true
console.log('model' in mycar); // returns true
//-------------------------------------------
//instance of
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car );
  // expected output: true
  
  console.log(auto instanceof Object);
  // expected output: true
  //----------------------------------------
  function Person(firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}

const person = new Person('prathyusha', 'kurigala');
//Person();
console.log(person);
console.log(person instanceof Person);