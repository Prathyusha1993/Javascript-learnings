//this big line will be converted down using template literals

// var summaryText = "Dear " + la.ApplicantName + ", " + reviewText + " Your risk profile is " + riskProfile;

// //templat eliterals
// var summaryText = `Dear ${la.ApplicantName}, ${reviewText}. Your risk profile is ${riskProfile}`;

// //i can stil change it as adding more experssions
// var summaryText = `Dear ${la.ApplicantName}, your application for ${la.amount}, ${reviewText}. Your risk profile is ${riskProfile}`;


//differencebetweeen let and const
function myFunc(){
    var value=10;
    if(value === 10){
        let value = 20;
        console.log(value);
        value = 30;
        console.log(value);
    }
    console.log(value);
}

myFunc();

//=-----------------------------
//destructing
const person = {
    firstName : "pinky",
    lastName:"kurigala",
    age:25,
    email:'praty@gmail.com',
    number:908976588
}

let {firstName="Pinky",
    lastName,age,email,number} = person;

