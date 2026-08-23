let age1 = 20;
    if(age1 >= 18){
        // console.log("Adult");
    }

    let age2 = 15;
    if(age2 >= 18){
        console.log("adult");
    } else{
        // console.log("minor");
    }

    // console.log(5=="5");
    // console.log(5==="5");
    
    let num1 = 5

    if (num1 > 0){
        // console.log("number is possitive");     
    } else if ( num1 < 0){
        console.log("number is negative");  
    }else{
        console.log("number is zero");
    }


// 90+ → A+
// 75–89 → A
// 60–74 → B
// 40–59 → C
// Below 40 → Fail

let num2 = 89;

if (num2 >= 90 ) {
    console.log("Hurrah! you got A+"); 
} 
else if (num2 >= 75) {
    // console.log("You got A grade");
}
else if (num2 >= 60) {
    console.log("You got B grade");
}
else if (num2 >= 40) {
    console.log("You got C grade");
}
else{
    console.log("Fail");  
}

// *********** if statement 

let marks = 89;

if (marks >= 90) {
    console.log("A+");
} else if (marks >= 75) {
    // console.log("A");
} else if (marks >= 60) {
    console.log("B");
} else if(marks >= 40){
    console.log("C");
}
 else  {
    console.log("Fail");
}

// ********** var

if (true) {
    var x = 10;
}
// console.log(x);


//   ************* switch statement ************

let fruit = "apples";

switch (fruit) {
    case  "banana" :
        console.log("banana");
        break;
    
    case "apple" : 
        console.log("apple");
        break;

    default:
        // console.log("unknown");
}



let num3 = "71"

switch (num3) {
    case "1":
        console.log("Monday");
        break;

         case "2":
        console.log("Tuesday");
        break;

         case "3":
        console.log("Wednesday");
        break;

         case "4":
        console.log("Thursday");
        break;

         case "5":
        console.log("Friday");
        break;

         case "6":
        console.log("Saturday");
        break;

         case "7":
        console.log("Sunday");
        break;

    default:
        // console.log("enter correct day between (1-7)");
        break;
}



if ([]) {
    // console.log("Hello");
}


if ({}) {
    // console.log("Hello");
}


let arrrr = []

if(arrrr.length === 0){
    // console.log("empty array")
}else{
    console.log("not empty array");
}



let objjj = {}

if (Object.keys(objjj).length === 0) {
    // console.log("empty object");
} else{
    console.log("not empty object");
}



// console.log(Object.keys({name : "subhan"}).length);



let name = null;
// console.log(name ?? "Guest");



let age = 0;
// console.log(age ?? 18);



let age4 = 0;
// console.log(age4 || 18);


let value = false;
// console.log(value ?? true);


let value1 = false;
// console.log(value1 || true);


let UserName = "admin"
let PassWord = "12345"

if (UserName==="admin" && PassWord==="12345") {
    // console.log("Login successful");
} else{
    console.log("Invalid username or password");
}


let users = [];

if (!users) {
    console.log("No users");
}


let username = "";
// console.log(username || "Guest");
// console.log(username ?? "Guest");


// Amount >= 5000 → 20% discount
// Amount >= 3000 → 15% discount
// Amount >= 1000 → 10% discount
// Otherwise → No discount

let Amount = 2500;

if (Amount>=5000) {
    console.log("20% Discount"); 
}
else if (Amount>=3000) {
    console.log("15% Discount");
}
else if (Amount>=1000) {
    console.log("10% Discount");
}
else{
    console.log("No Discount");
}