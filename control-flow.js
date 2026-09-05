// console.log("a");
// console.log("b");
// console.log("c");


let age1 = 20;

if (age1 >= 18) {
    // console.log("you can vote");
}


let password1 = "12345678"

if (password1.length >= 8) {
    // console.log("password is strong");
}


let age2 = 16;

if (age2 >= 18) {
    console.log("you are an adult ");
}
else 
{
// console.log("you are a minor");
}



let marks = 43;

if (marks >= 90) {
    console.log("A+"); 
} else if (marks >= 75){
    console.log("A");
} else if (marks >= 60){
    console.log("B");
} else if (marks >= 49){
    console.log("C");
} else {
    // console.log("FAIL");
}



let role = "editor";

if (role === "editor") {
    // console.log("Edit Access");
} 
 else if (role === "user") {
    console.log("Limited Access");    
}
  else if (role === "admin") {
    console.log("Full Access");    
} 
 else if (role === "unknown") {
    console.log("Logout");    
} 
 else {
    console.log("No Access");
}



//  ***********   var is function-scoped. 
// ****** var ka use nhi karna hai coz ye scope ke bahar bhi access ho sakta hai isliye 

// ****  let & const are  block scoped  ye sirf scope {} ke anadr hi use hote hai bahar nhi

if (true){
    var name1 = "subhan"
}
// console.log(name1);
  

// Implicit Scope

// A block can create scope even without a function.

// For example:

{
    let name = "Subhan";
    // console.log(name);
}


// ***** switch statement 

// switch is useful when you want to compare one value against many possible values.

let day = "monday"

switch (day) {
    case  day : "monday" 
        // console.log("Start of the week");
        break;

        case  "friday" :
        console.log("Weekend is near");
        break;

        case "sunday" :
        console.log("Holiday ");
        break;

    default:
        console.log("Normal day");
        break;
}



// Without break, JavaScript can continue executing the following cases.

// Example:

let number = 1;

switch (number) {
    case 1:
        // console.log("One");
    case 2:
        // console.log("Two");
}

// It can execute both cases because there is no break.




// Falsy values

// These values are treated as false:

// false
// 0
// -0
//  BigInt 0n           
// ""
// null
// undefined
// NaN

// Example:

let name2 = " ";

if (name2) {
    // console.log("Name exists");
} else {
    console.log("Name is empty");
}



// Truthy values

// Almost everything else is truthy.

// Examples:

// "hello"
// "0"
// "false"
// 1
// -1
// []
// {}
// function() {}
// " "


if ("hello") {
    // console.log("This runs");
}


// Very Important: Empty Array

// A common beginner confusion:

let arr = []
if (arr){
    // console.log("array exist");
}

// If you want to check whether an array is empty:

if (arr.length === 0){
    // console.log("Array is empty"); 
}



// Empty Object

// Another common confusion:

let obj = {}
if (obj){
    console.log("obj exist");    
}


// If you want to check whether the object has no properties:

if (Object.keys(obj).length === 0){
    console.log("Obj is empty");  
}



// nullish coalescing operator (??)

// The ?? operator is used when you want a fallback value only when the left side is null or undefined.

let usename1 = null

let resultt = usename1 ?? "guest" ;

console.log(resultt);



// && and operator (logical operator)  all coditions are true 
// || or operator  (logical operator)  only one conditions is true


let age3 = 0;

console.log(age3 || 18);






