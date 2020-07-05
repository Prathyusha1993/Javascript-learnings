function test(){
    var foo = 33;
    if(foo) {
       //let foo = (foo + 55); // ReferenceError
       let fo = (foo + 55 );
       console.log(fo);
    }
 }
 test();
 // ----------------------------------
 function go(n) {
    // n here is defined!
    console.log(n); // Object {a: [1,2,3]}
  
    // for (let n of n.a) { // ReferenceError
    //   console.log(n);
    // }
  }
  
  go({a: [1, 2, 3]});
  //---------------------------------------------------------------
  var x = 1;

  if (x === 1) {
    var x = 2;
  
    console.log(x);
    // expected output: 2
  }
  
  console.log(x);
  // expected output: 2
  //---------------------------------------------
  
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
    //----------------------------------------------------
  
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