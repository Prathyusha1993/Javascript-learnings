

// const array = [1,3,4];
// array.push('f');

// console.log(array);

// const array1 = [{id:1, age:45}, {id:2, age:56}];
// array1[0]={id:3, ag3:23};
// console.log(array1);

// var x = 1;

// if (x === 1) {
//   var x = 2;

//   console.log(x);
//   // expected output: 2
// }

// console.log(x);
// // expected output: 2

function varTest() {
    var x = 1;
    {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }
  
  function letTest() {
    let x = 1;
    {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }

  var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y);
//-------------------------------------------------
let x = 1;
switch(x) {
  case 0:
    let foo;
    break;
    
  case 1:
    let foo; // SyntaxError for redeclaration.
    break;
}
//-------------------------
let x = 1;

switch(x) {
  case 0: {
    let foo;
    break;
  }  
  case 1: {
    let foo;
    break;
  }
}