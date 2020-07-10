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
//indexOf
const arrr = ['a', 3, 'g', 'jd', 5, 'u', 'o'];
console.log(arrr.indexOf(3)); //1
console.log(arrr.indexOf('p')); //-1 becoz p is not in array it won't give as undefined

//filter
let set = arrr.filter(function(item){
    console.log("item", item);    //filter function ll execute for onetime for each element inthe array
    return item >'g';
});
console.log(set);

//find():
const val = ['a', 'bbb', 'ccccc', 'ddd'];
let found = val.find(function(item){  //this func returns an element as soon as if its greater it won't go thourghall the elementin tha array
    return item.length > 1;
})
console.log(found);

const found1 = val.find(element => element > 4);;
console.log(found1);

const inventory = [
    {name: "orange", quantity:3},
    {name: "graopes", quantity:8},
    {name: "mangoes", quantity:1}
];
function isMangoes(fruit){
    return fruit.name === "Mangoes";
}
console.log(inventory.find(isMangoes));

//forEach 
val.forEach(function(item, index){ //goes through all the elemnts in athe arrya and prints all the elemnts in array
    console.log(item, index);
})

let msgArray = []
msgArray[0] = 'Hello'
msgArray[99] = 'world'

if (msgArray.length === 100) {
  console.log('The length is 100.')
}

//concat
const message = ['a','n', 'f', 't'];
const mess1=['w', 4, 5, 'u'];
let set2 = message.concat(mess1);
console.log(set2);
console.log(message.concat(1,2,3,4,));
console.log(message.concat(...mess1));

//filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 8);
console.log(result);

function isBigEnough(value){
    return value >=10
}
let filtered  = [12, 5, 7, 89, 45,].filter(isBigEnough);
console.log(filtered);

const prime = [-3, -2, -1, 0, 1, 2, 3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15];
function isPrime(num){
    for(i=2; num > i; i++){
        if(num % i ==0){
            return false
        }
    }
    return num > 1
}
console.log(prime.filter(isPrime));

//includes
const array7 = [2,4,6,8];
console.log(array7.includes(2)); //true
console.log(array7.includes(0)); //false
console.log(array7.includes(6)); //true

//keys
const iterator = array7.keys();
for(const value of iterator){
    console.log(value);
} //ouptut 0, 1,2, 3

//map() : map creates an anew array populated with results of calling a provided func on every element in the calling array
const arrayy = [1,4,6,7,3];
const newArray = arrayy.map(x => x*2);
console.log(newArray);

const newArr = arrayy.map(root => Math.sqrt(root));
console.log(newArr);

let kvArray = [{key: 1, value: 10}, 
    {key: 2, value: 20}, 
    {key: 3, value: 30}]
    console.log(kvArray[0].value);

let reformattedArray = kvArray.map(obj => {
    let robj = {};
    robj[obj.key] = obj.value;
    return robj;
})
console.log(reformattedArray);

//reduce() : takes arguments as accumalator, currentvalue, currentindex, sourcearray
const hello = [1,2,3,3,4,4];
const result4 = hello.reduce((accumalator, currentValue) => {
    return accumalator+currentValue;
});
console.log(result4);
console.log(result4 + 5);
//------------
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x
}, initialValue)

console.log(sum)

//reverse(): reverse an array in place first arrya element becomes last and last becomes first
const output = hello.reverse();
console.log(output);

//sort() : sorts tehe elements of array in place and returns sorted array. default is ascendiing 
const months = ['jul', 'jun', 'oct', 'aug'];
months.sort();
console.log(months);
//---------
let numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

//toString()
const array8 = [1, 2, 'a', '1a'];
console.log(array8.toString());
