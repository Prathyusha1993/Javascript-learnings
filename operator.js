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

//converting string and numbers
let amount = 124; //here it is num
amount = amount.toString();
showMessage(typeof amount); //here changes to string

let amount1 = Number.parseFloat("128.99"); //converts this string num into a number
showMessage(amount1);
