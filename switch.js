//switch is mostly used to replace the multiple if-else statements
function simpleSwitch(){
    let productId = 1;
    switch (productId) {
      case 1:
        console.log("product 1");
        break;
      case 2:
        console.log("product 2");
        break;
      case 3:
        console.log("product 3");
        break;
      default:
          console.log("unknown number");
        break;
    }
}

function multipleCase() {
  let color = "red";
  switch (color) {
    case "red":
    case "pink":
      console.log("this color is red");
      break;
    case "blue":
    case "light blue":
    case "dark blue":
      console.log("this color is blue");
      break;
    case "grey":
    case "gray":
      console.log("this color is grey");
      break;

    default:
        console.log("unknown color");
      break;
  }
}

function forgetABreak(){
    let productId = 2;
    switch (productId) {
      case 1:
        console.log("HL Road Frame - Black, 58");
        break;
      case 2:
        console.log("Sport-100 Helmet, Red");
      case 3:
        console.log("Mountain bike Socks, M");
        break;
      default:
        console.log("unkown product");
        break;
    }
}

//when switc does a strict comparison- it checks the type and value must match
'use strict';
function strictComparison(){
    let productId = "2";

    switch(productId){
        case 1:
            console.log("HL Road Frame - Black, 58");
        break;
      case 2:
        console.log("Sport-100 Helmet, Red");
        break;
      case 3:
        console.log("Mountain bike Socks, M");
        break;
      default:
        console.log("unkown product");
        break;
    }
}

function blockScope(){
    let productId=2;

    switch (productId) {
      case 1:{
        let message = "HL Road Frame - Black, 58"; //it gives an error message is already declared if you won't mention braces {}
        console.log(message);
        break;}
      case 2:{
        let message = "Sport-100 Helmet, Red";
        console.log(message);
        break;}
      case 1:{
        let message = "Mountain bike Socks, M";
        console.log(message);
        break;}
      default:{
        console.log("unknown messge");
        break;}
    }
}
//-----------------------------------------------------------------------------
//For-in statements: iterators over the elements of objects(properties and methods) and returns the key
function forinSample(){
    let product = {
      productId:680,
      name:"HL Road Frame - Black, 58",
      productNumber:'FR-R92B-58',
      color:"black",
      standardCost:1059.31,
      listPrice:1431.50,
      calculateGrossProfit:function(){
        return this.listPrice - this.standardCost;
      }
    };
  
    for(const key in product){
      console.log("'" + key + "'=" + product[key]);
    }
  }
//--------------------------------------------------------------------
//for-of iterators over values in array, string etc...and returns object for each iteration
function forofSample(){
    let product = [
    {
      productId:680,
      name:"Sport-100 Helmet, Red",
      productNumber:'FF-Y67Y-4',
      color:"Red",
      standardCost:1876.31,
      listPrice:1789.50
    },
    {
        productId:787,
      name:"HL Road Frame - Black, 58",
      productNumber:'FR-R92B-58',
      color:"black",
      standardCost:1059.31,
      listPrice:1431.50
    },
    {
        productId:567,
      name:"Mountain bike Socks, M",
      productNumber:'As-I87R-8',
      color:"blue",
      standardCost:1345.31,
      listPrice:1128.50
    }];
    for(const item of product){
        console.log(JSON.stringify(item));
      }
}