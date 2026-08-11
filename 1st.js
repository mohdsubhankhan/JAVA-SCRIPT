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

// console.log(balance.toString().length.toFixed(3));

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

let date = new Date(2026, 7, 11);

// console.log(date);
// console.log(typeof  date);
 
let q =   date.getFullYear()
// console.log(q)

let f = date.getMonth()  // in java script 0 is a consider as a january
// console.log(f)

let i = date.getDay()
// console.log(i)


let k = date.setMonth(5);
let o = date.setDate(20);
let m = date.setHours(10);
let h = date.setFullYear(2030);

// console.table({
//   k,o,m,h

// // });

let date1 = new Date("2026-01-01");
let date2 = new Date("2026-12-01");

// console.log(date1 < date2);
  
// ****************  ARRAY  ******************

const myarr = ["subhan", "amaan", "areeb", "ahtesham", "anam", "ahill"]

const myarr2 = [0, 1, 2, 3, 4, 5]

// console.log(myarr)

// ************************* ARRAY METHOD ********************

// myarr.push("adnan")       // add a value in array in the last
// myarr.push("alman")

// console.log(myarr)


// myarr.pop()               // remove a value in array in the last
// console.log(myarr)

myarr2.unshift(6)      // shift a value of 0th index of array (6)add front 
// console.log(myarr2)

myarr2.shift()          // remove the 0th index of array (6) is remove 
// console.log(myarr2)

// console.log(myarr2)

// console.log(myarr2.includes(9))     // it is check that 9 is in array or not so it is answer true or false 
// console.log(myarr2.indexOf(2))   // it is a show that in array 2 indoex who so it is print 



const newarr = myarr2.join()   // join() convert array to a string (typeof)
// console.log(newarr)
// console.log(typeof newarr)   // it convert to a string



// ********************** SLICE & SPLICE ****************

// console.log("A", myarr)
const myn1 = myarr.slice(0,4)   // in slice array is not manipulate 
// console.log(myn1)
// console.log("B", myarr)

const myn2 = myarr.splice(1,4)   // in splice array real value is manipulate 
// console.log(myn2)
// console.log("C", myarr)

const myarr3 = ["subhan", "amaan", "areeb", "ahtesham"]
const myarr4 = ["saman", "saniya", "mantasha", "zainab" ]

// myarr3.push(myarr4)    // pushh another array in that array asa unofficial way
// console.log(myarr3)

// console.log(myarr3[4][1])   // get the value from array 

// const concatarray = myarr3.concat(myarr4)  // concat means add all array in a good form 
// console.log(concatarray)

// const spredarray = [...myarr3, ...myarr4]   // it is use for spreading array in official way 
// console.log(spredarray)

const arr5 = [1, 2, 3, [4, 5], 6, 7, [8, 9, [10, 11]]]
// console.log(arr5.flat(Infinity))  // it use for all array in join one array


console.log(Array.isArray("SUBHAN"))   // IT IS  check that given is array or something else

console.log(Array.from("SUBHAN"))   // IT IS  use for make array to anaything else

console.log(Array.from({name:"subhan"}))  // it is not convert to an array because this is an object in object we tell that keys and value : its written an empty array 
 
let score7 = 100
let score8 = 200
let score9 = 300

console.log(Array.of(score7,score8,score9))






