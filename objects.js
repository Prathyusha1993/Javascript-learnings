let person = {
    name: 'navithaa',
    age:34,
    partTime: false
};
showMessage(person.age);
console.log(person.name);
console.log(person.prtTime);
console.log(person['age']);

//object methods
let person1 = {
    name: 'navithaa',
    age:34,
    partTime: false,
    showInfo: function(firstName, oldAge){
        showMessage('this is method inside the object');
        showFunctions(firstName + 'is'+ oldAge);
    }
};

person1.showInfo();
person1.showInfo('pinky', 56);
showMessage(typeof person1.showInfo);

//passing objects to functions
//changing the string, boolean, inteeger will lost it won't change whereas when passing object it changes below are examples

//passing string but won't change
let message = 'hello';
function myFunc(message){
    message='hi';
}
myFunc(message);
showMessage(message); //OUTPUT WILL BE HELLO,

//passing object as agrument
let person2 = {
    name: 'navithaa',
    age:34,
    partTime: false};

function incrementAge(p){
    p.age++;
}
incrementAge(person2);
showMessage(person2.age);