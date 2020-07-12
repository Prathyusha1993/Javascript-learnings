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


const array =['a', 'b', 'c'];
array.splice(0, 1, 'c');
 array.splice(2, 1, 'a');
console.log(array);
