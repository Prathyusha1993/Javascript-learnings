const counterLib = (() => {
  let currentValue = 0;

  return {
    getCurrentValue: () => {
      return currentValue;
    },
    increment: (value) => {
      currentValue += value;
    },
    decrement: (value) => {
      currentValue -= value;
    },
  };
})();

// const counterLib = counter;

console.log(counterLib.getCurrentValue());

counterLib.increment(1);
console.log(counterLib.getCurrentValue());

counterLib.decrement(1);
console.log(counterLib.getCurrentValue());


// const array =['a', 'b', 'c'];
// array.splice(0, 1, 'c');
//  array.splice(2, 1, 'a');
// console.log(array);

function makeFunc() {
  var name= 'edward';
  function displayName() {
    //alert(name);
    // console.log(name)
  }
  return displayName;
}

// console.log(makeFunc());
var myFunc = makeFunc();
myFunc();


//-------------------------------------------------------------------
// input:
// [a,b,c]

// output:
// [c,a,b]

// create temp var
// iterator array elements using for loop
// if poinetr is at first elements then placd it in temp var
// replace i+1th element in ith position
// last postion is array.length -1
// when i is at last position then replace ith position with temp var

