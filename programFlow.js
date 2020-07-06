if(5 === 5){
    console.log('yes');
}

if(5>10){
    console.log('no');
}

let state = 'FL';
let tax=0;
if(state === 'FL'){
    tax=7;
}else{
    tax=12;
}
console.log(tax);

let price=320;
if(price>= 15){
    showMessage('discounted');
}
if("0"){
    if("1"){
        if(2!==1){
    showMessage('true');}}
}

let dist='chittoor';
let state1='ap';
if(dist === 'chittoor'){
    showMessage('yes');
}else if(state1==='ap'){
    showMessage('yes');
}else{
    showMessage('false');}


let amount = 200;
 (amount>1500)?showMessage('expensive'):showMessage('cheap');
 let total = (amount>1500)?'expensive':'cheap';
 showMessage(total);
//-----------------------------------------------------------------------------

for(let i=0; i<=9; i++){
    console.log(i);
}

let count = 1;
while(count <5){
    console.log(count);
    count++;
}

function doSomething(name){
    return name;
}

let count1 = 1;
while(count1 <5){
    
    console.log(doSomething('pinky'));
    count1++;
}

//body of the code executes atleast once
let i=7;
do{
    console.log(i);
    i++;
}
while(i<12);
//-----------------------------------------------------
let gift = 'given';
let gift1 = 'givenbutcondition';
let gift2 = 'givenbutlately';
if(gift === 'given'){
    showMessage('yes true');
}else if(gift1 !== 'givenbutcondition'){
    showMessage('yes true');
    
}else if(gift2 === 'givenbutlately'){
    showMessage('yestrue')
}else{
    showMessage('false')
}
//------------------------------------------------------------
