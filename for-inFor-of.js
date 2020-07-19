//for-in
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

const obj= {id:1, name:'pinky', age:26}
for(const prop in obj){
    showMessage(`${prop}=${obj[prop]}`);
}
//--------------------------------------------------
const iterable = [10, 20, 30];

for (const value of iterable) {  
  console.log(value);
}  // 10
// 20
// 30

const iterable1 = [10, 20, 30];

for (let value of iterable1) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31

const iterable = 'boo';

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"

const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
// 0
// 255

const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3

const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
//-------------------difference between for-in and for-of
Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};

const iterable = [3, 5, 7];
iterable.foo = 'hello';

for (const i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

for (const i of iterable) {
  console.log(i); // logs 3, 5, 7
}

//--------------------------------------------------------------------


