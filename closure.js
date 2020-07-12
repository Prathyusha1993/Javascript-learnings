const counter = {
    currentValue: 0,

  getCurrentValue : ( )=> {
    return currentValue;
  },
  increment : (value)=>{
    currentValue += value;
  },
  decrement : (value)=>{
    currentValue -= value;
  }
};


// console.log(counter);
console.log(counter.currentValue);
counter.increment(6);
console.log(counter.currentValue);
counter.increment(6);
console.log(counter.currentValue);
counter.decrement(6);
console.log(counter.currentValue);
counter.getCurrentValue(6);

console.log(counter.currentValue);




