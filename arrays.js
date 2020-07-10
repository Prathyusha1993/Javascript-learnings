//creating or initializing arrays
let values = [1,2,3,4];
console.log(values);
let values1 = Array.of(1,2,3,4); //both are correct for creating and initializing array.
console.log(values1);
const array = ['a', 'b', 'c'];
console.log(array);
console.log(typeof array);
//accessing arry elements
console.log(array[0]); //a
console.log(array[1]); //b
console.log(array[2]); //c
console.log(array[3]);  //undefined
array[1]='bbbb';
console.log(array[1]);  //bbbb

const array1 = [2,4,6,8];
console.log(array1.push(10));

const arr=['a', 'b', 'c'];
const last = arr.push('d', 'e', 'f');
console.log(arr); //a, b, c, d, e, f

const arr2 = ['e', 'f', 'g'];
console.log(arr2.pop()); // removes g from array

const arr3 = [1,2,3,4,5,6];
console.log(arr3.shift()); // removes the first elemrnt from array
console.log(arr3.shift());
console.log(arr3);
console.log(arr3.unshift('q'));//adds the elemnt q in first of array
console.log(arr3);
console.log(arr3.unshift('hello', 'world'));//adds at the beginning of the array
console.log(arr3);

//slice() :
const arr4 = ['a', 'b', 'c', 'm', 'h', 'r'];
const newarr = arr4.slice(1,4); //creates an new array from b to m, it won't change the original array
console.log(newarr);
console.log(arr4); //return original array

//splice(): splice can delete and also insedrt
const arr5 = ['a', 'c', 'i', 'h', 'r'];
arr5.splice(2,1); //splice(indexof arrayto delete, howmanyelemnts to delete) and it changes the original array
console.log(arr5);

//splice insert
arr5.splice(2, 0, 'hiii'); //insert at index 2 hii but don't delete anything 0.
console.log(arr5);

//array searching and looping
