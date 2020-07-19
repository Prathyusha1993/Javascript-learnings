//few examples
// "use srict";
(function(){
    var a=b=3; //this will take as b=3 var a=b;
})();
console.log(typeof a);
console.log(typeof b);
console.log("a defined?" + (typeof a !== 'undefined')); //false
console.log("b defined?" + (typeof b !== 'undefined')); //true
//---------------------------------------------------------
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
//----------------------------------------------------------------
function foo1()
{
  return {
      bar: "hello"  //return {bar:"hello"}
  };
}

function foo2()
{
  return
  {
      bar: "hello"      // returns undefined
  };
}
console.log(foo1());
console.log(foo2());
//-------------------------------------------------------------------
console.log(0.1+0.2);  //0.3
console.log(0.1+0.2 == 0.3);  //false

function areTheNumbersAlmostEqual(num1, num2) {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));
//----------------------------------------------------------------------
const result = Math.abs(0.2 - 0.3 + 0.1);
// console.log(0.2 - 0.3+0.1);
console.log(result);
//---------------------------
function integer(value){
    return (value ^ 1) === value;
}
integer(5);
//---------------------------------------------
//palindrome
function palindrome(str){
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

console.log(palindrome("level")); //it will retutrn booleann as true
console.log(palindrome("madam"));

function palindrome(str){
    var str1 = str.replace(/\W/g, '').toLowerCase();
    var str2 =  str1.split('').reverse().join('');
    return str2 === str1;
}
palindrome("level");
//--------------------------------------------------------
function sum(a,b){
    return a+b;
}
console.log(sum(3, 5));
//--------------------------------------------
//closure example
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +   //123
        "innerArg = " + innerArg + "\n" +   //456
        "outerVar = " + outerVar + "\n" +   //a
        "innerVar = " + innerVar + "\n" +   //b
        "globalVar = " + globalVar);    //xyz
    
    })(456);
})(123);
//--------------------------------------------
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// 	setTimeout(function() { console.log(i); }, i * 1000 );
// }
//--------------------------------------------
// for (let i = 0; i < 5; i++) {
//     //console.log(i);
// 	setTimeout(function() { console.log(i); }, i * 1000 );
// }
//-------------------------------------------
console.log(false == '0') //true
console.log(false === '0') //false
//-------------------------------------------
console.log("0 || 1 = "+(0 || 1));  //0||1 = 1
console.log("1 || 2 = "+(1 || 2));  //1||2 = 1
console.log("0 && 1 = "+(0 && 1));   //0&&1 = 0
console.log("1 && 2 = "+(1 && 2));  //1&&2 = 1
//-------------------------------------------
for(var j=1; j<4; j++){
    // console.log(j);
    //The reason for this is that each function executed within the loop
    // will be executed after the entire loop has completed and all will 
    //therefore reference the last value stored in i, which was 5.
    setTimeout(()=>{console.log(j);}, j*1000); //output is 4 4 4
}

for(let j=1; j<4; j++){
    // console.log(j);
    setTimeout(()=>{console.log(j);}, j*1000); //output is 1 2 3
}
//----------------------------------------------------------
var a ={};
b={key:'b'};
c={key:'c'};

a[b] = 123;
a[c] = 456;
console.log(a[b]); //ouput is 456 becoa both are equivalent to a[object, object] acn be interchangeble 
//therefore setting or referning a[c] is same as a[b].
//---------------------------------------------------------
console.log((function f(n){
    return ((n>1) ? n*f(n-1) : n)
})(10)); //ouput 3628800
//-------------------------------------------------
(function(x){
    return (function(y){
        console.log(x);
    })(2);
})(1);  //this is closure output is 1
//---------------------------------------------------------
var hero = {
    _name:"taka",
    identity:function(){
        return this._name;
    }
};

let secretIdentity = hero.identity; //this can be corected as
let secretIdentity1 = hero.identity.bind(hero); //taka
console.log(secretIdentity()); //undefined
console.log(hero.identity()); //taka
//------------------------------------------------------------------
var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();               //here output is 10 as var length=10 is declared globally so this referes to window object
    arguments[0]();
  }
};
//Hence arguments[0]() is nothing but calling fn(). 
//Inside fn now, the scope of this function becomes the arguments array, and logging the length of arguments[] will return 2.
obj.method(fn, 1);  //output 10,2
//-------------------------------------------------------
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
console.log(girl ()); //gives undefined becoz when the function is executed, it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one.)
//-------------------------------------------
//how do you clone objects?
let obj = {a:1, b:2};
let objClone = Object.assign({}, obj); //it will do shallow copy but not deep copy
//------------------------------------------------
console.log(1 < 2 < 3); //true
console.log(3 > 2 > 1);  //false, it ll execute fromleft to right 3>2>1, true>1, 1>1 false
//-----------------------------------------------------
const array1 = ['a', 'b', 'c', 'd'];
array1.push('end');
array1.unshift('start');
console.log(array1); //start a b c d end
array1 = ['start', ...array1];
console.log(array1);
array1 = [...array1, 'end'];
console.log(array1);
//---------------------------------------
console.log(typeof typeof 1); //string, typeof 1 => "number" => string
//-----------------------------------------------------------------
document.cookie = "key1=value, key2=value1, key3=value3";
