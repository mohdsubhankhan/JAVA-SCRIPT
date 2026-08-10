// console.log("mohd subhan khan");

const accountId = "123456";
let accountMail ="subhan@gmail.com";
var accounPass = "subhan123@";
accountCity = "delhi";

accountMail = "subhankhan";
accountPass ="132334";
accountCity ="lucknow";

let accountState;

//accountId="121212"; // This will throw an error because accountId is a constant and cannot be reassigned.

// console.log(accountId);
// console.log(accountMail);
// console.log(accountPass);
// console.log(accountCity);


// console.table ({
//     accountId,
//     accountMail,
//     accountPass,
//     accountCity,
//     accountState
// });


//conversion

let somenumber = 123;
let stringNumber = String(somenumber);
// console.log(stringNumber);
// console.log( typeof stringNumber);

let str1 = "123abc";
let str2 = String(str1);
// console.log(str2);
// console.log(typeof str2);


let isLoggedIn = "subahn";
let booleanValue = Boolean(isLoggedIn);
// console.log(booleanValue);
// console.log(typeof booleanValue);

let lil="subhan";
let lil2 = Number(lil);
// console.log(lil2);
// console.log(typeof lil2);

//operations
let num1 = 10;
let num2 = 20;
let sum = -num1
// console.log(sum);

// console.log(num1 + num2);

// console.log (2+2);
// console.log (2-30);
// console.log (2*2);
// console.log (2/3);
// console.log (2%7);          
// console.log (2**5); // 2 raised to the power of 5  


                  //               conversion of string to number


                  let score1 = "123abc";

                  // console.log(score1);
                  // console.log(typeof score1);

                  let score2 = Number(score1);
                  // console.log(score2);
                  // console.log(typeof score2);

                  let score3 = 33
                  let score4 = String(score3);
                //   console.log(score4);
                //   console.log(typeof score4);

                  let score5 = undefined;
                       let score6 = Boolean(score5);
                //   console.log(score6);
                //   console.log(typeof score6);


                 //             operations


// console.log("35" > 22);
// console.log(822 > "767");
// console.log(true > 343);

// console.log("2"===2);
// console.log(2===3);
// console.log(2===2);

let myyoutubename = "subhan khan";

// console.log(myyoutubename.length);
// console.log(myyoutubename.toUpperCase());

let anotherName = myyoutubename

anotherName = "lovvy"

// console.log(myyoutubename)
// console.log(anotherName)

let userone = {
  name: "subhan",
  age: 25
}

let usertwo = userone;

usertwo.name = "lovvy";
usertwo.age = 30;

// console.log(userone);
// console.log(usertwo);


// ******************** NUMBER & MATH METHODS **********************

const score = 400;
// console.log(score);

const balance = new Number(200);
// console.log(balance);

// console.log(balance.toString().length.toFixed(2));

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(5));

const otherNumber2 = 1000000;
// console.log(otherNumber2.toLocaleString("en-In"));

// ****************** MATH ********************

// console.log(Math.abs(-55));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.2));
// console.log(Math.min(2, 3, 4, 5, 6, 7));
// console.log(Math.max(2, 3, 4, 5, 6, 7));


// console.log((Math.random()));

// console.log(Math.random()*10);

// console.log((Math.random()*10) +1);

// console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max= 20;

// console.log(Math.floor(Math.random() * ( max - min + 1 ))+min);



// ********************  DATES ***************
let date = new Date(2026, 7, 10);

console.log(date);
console.log(typeof  date);
 
let q=date.getFullYear
console.log(q)

