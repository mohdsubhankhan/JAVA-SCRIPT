let score = "100";
// console.log(typeof score);

score = 100;
// console.log(typeof score);

let x;
let y = null;
// console.log(typeof x);
// console.log(typeof y);

let value = "33";
let numberValue = Number(value);

// console.log(numberValue);
// console.log(typeof numberValue);

let value1 = "33abc";
let result = Number(value1);

// console.log(result);
// console.log(typeof result);

// console.log(Number("123")); 
// console.log(Number("123abc"));
// console.log(Number(""));
// console.log(Number("  "));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number(true));
// console.log(Number(false));

// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean("subhan"));
// console.log(Boolean(null));
// console.log(Boolean(undefined));


// *********** CONFUSING STRING ************

// console.log("2" + 2); //22
// console.log("2" - 2);  //0
// console.log("2" * 2);  //4
// console.log("2" / 2);   //1

// let result1 = "10" + 5 + 5;
// console.log(result1);

// let result2 = 10 + 5 + "5";
// console.log(result2);

// console.log("10" - "5");     // 5
// console.log("10" + "5");        //105
// console.log("10" * "2");        //20
// console.log("10" / "2");        //5

// console.log(2 > 1);      // true      
// console.log(2 == "2");       //true 
// console.log(2 === "2");      //false

// console.log(null > 0);       //false 
// console.log(null == 0);      //false
// console.log(null >= 0);      //true


// console.log(undefined == 0);        // false
// console.log(undefined > 0);         // false
// console.log(undefined < 0);         // false    


// console.log("2" > 1);          // true
// console.log("02" == 2);         // true
// console.log("02" === 2);        // false
// console.log(true == 1);         //true
// console.log(false == 0);        //true
// console.log(true === 1);        //false




//****************    string method**************


// const name = "suBHan";
 
// console.log(name.length);        6//
// console.log(name.toUpperCase());     // SUBHAN
// console.log(name.toLowerCase());             // subhan


// let str1 = "   subhan khan   ";

// console.log(str1.length);        //17     
// console.log(str1.trim());            //subhan khan  // trim cut space left and right side of string not middle space of string

// console.log(str.trim().length);      //11


// let str = "JavaScript";

// console.log(str.charAt(0));
// console.log(str.charAt(4));
// console.log(str.indexOf("J"));
// console.log(str.indexOf("S"));
// console.log(str.indexOf(""));       // 0
// console.log(str.indexOf(" "));       // -1
// console.log(str.indexOf("l"));       // -1




let str2 = "Hello World";

// console.log(str2.includes("World"));   
// console.log(str2.includes("world"));
// console.log(str2.startsWith("Hello"));
// console.log(str2.endsWith("World"));

// console.log(str2.slice(6,-8));   


// in slice method first parameter is starting index and second parameter is ending index. slice method return the string from starting index to ending index but not include the ending index. if we use negative index then it will count from the end of the string.

// console.log(str2.slice(0));
// console.log(str2.slice(-5));

// console.log(str2.substring(0, 5));

// substring method is similar to slice method but it does not accept negative index. if we use negative index then it will consider it as 0. it will return the string from starting index to ending index but not include the ending index.

// console.log(str2.substring(6));
// console.log(str2.substring(-5));  


let str3 = "Hello World";

// console.log(str3.includes("World"));
// console.log(str3.includes("world"));
// console.log(str3.startsWith("Hello"));
// console.log(str3.endsWith("World"));


// *************  STACK & HEAP MEMORY **************

let a = 10;
let b = a;

b = 20;

// console.log(a);   // 10
// console.log(b);  // 20


let user1 = {
    name:"subhan",
    age:22  
}

let user2 = user1;

user2.name = "khan";
user2.age = 10;

// console.log(user1.name);
// console.log(user1.age);

// console.log(user2.name);
// console.log(user2.age);



let val1 = "10";

// // console.log(typeof val1);

// val1 = Number(val1);

// console.log(val1);
// console.log(typeof val1);

// console.log(val1 + "5");
// console.log(val1 - "5");

// console.log(val1 == "10");
// console.log(val1 === "10");



let c = "5";
let d = 2;

// console.log(c+d);
// console.log(c-d);  

// console.log(c==5);  
// console.log(c===5);

// console.log(Boolean(c));  
// console.log(Boolean(d));

    let e =c;
    c="10";

    // console.log(c);  // "10"
    // console.log(e);  // "5"



    let a1 = 100;
let b1 = a1;

b1 = 500;

// console.log(a1);
// console.log(b1);

let user11 = { name: "Subhan" };
let user22 = user11;

user22.name = "Rahul";

// console.log(user11.name);


let arr1 = [10, 20, 30];
let arr2 = arr1;

arr2.push(40);

// console.log(arr1);
// console.log(arr2);


let aa = { value: 10 };
let bb = aa;

bb.value = 20;

aa = { value: 30 };

// console.log(aa.value);
// console.log(bb.value);



let user111 = {
    name: "Subhan",
    age: 23
};

let user222 = user111;

user222.age = 24;

user111 = {
    name: "Aman",
    age: 25
};

console.log(user111.name);
console.log(user111.age);
console.log(user222.name);
console.log(user222.age);