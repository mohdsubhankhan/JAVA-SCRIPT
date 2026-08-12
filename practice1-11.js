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

// console.log(user111.name);
// console.log(user111.age);
// console.log(user222.name);
// console.log(user222.age);



// ************** practice of array & their method ******************


let fruits = ["apple", "banana", "mango"]

// fruits.push("orange")   // add in the end 
// console.log(fruits)


// fruits.pop();        // remove in the end
// console.log(fruits)


// fruits.unshift("grapes")      // add in the beginning
// console.log(fruits)


// fruits.shift()         // remove in the beginning of the array 
// console.log(fruits)


// console.log(fruits.includes("apple"))       // it is check the element is available or not in array


// console.log(fruits.indexOf("mango"))     // it is check the index of array like 0 position and 2 position and others


// console.log(fruits.indexOf("Orange")); // -1 because orange is not available in the array so -1 is print


let arrr1 = ["s", "u", "b", "h", "a", "n"]
// console.log(arrr1.join("-"))             // it convert an array to a string


// console.log(typeof arrr1.join("-"))           // also check the type of because the type of array is object 

let arrr2 = ["10", "20", "30", "40", "50"]

// console.log(arrr2.slice(1,4))   // slice is not change the original array value    " does not modify the original array "
// console.log(arrr2)


// console.log(arrr2.splice(0,2))   // splice is change the array original value  "its modify the original array"
// console.log(arrr2)



let aaa = [1,2,3]
let bbb = [4,5,6]

//  let cc = aaa.concat(bbb)   // concat    its combine 2 or more than 2 array in one array

// console.log(cc)

//  console.log(aaa.concat(bbb))

// console.log([...aaa, ...bbb])     // spread     array ko spread karna     


let sss = [1,2,[3,4],[5,6,[13,14,15]],[7,8,[9,10,[11,12]]]];

// console.log(sss.flat(Infinity))  // flatten the nested array using infinity

// console.log(Array.isArray([1,2,3,4]))    // it is check that given number and anythings else is array or not

// console.log(Array.isArray("subhan"))   // it is check that given number and anythings else is array or not


// console.log(Array.from("KHAN"))     // its convert into an array like = ["k", "h", "a", "n"]


let kkk = Array.of(10,20,30)       // its converts in a array 
// console.log(kkk)



// *******************  Practice  Questions **************



let arr = [10, 20, 30];

arr.push(40);
arr.pop();
arr.unshift(5);
arr.shift();

// console.log(arr);



let arrrr1 = ["HTML", "CSS", "JavaScript", "React"];

// console.log(arrrr1.includes("JavaScript"));
// console.log(arrrr1.indexOf("React"));
// console.log(arrrr1.indexOf("Node"));

let ar = [10, 20, 30, 40, 50];

let results = ar.slice(1, 4);

// console.log(results);
// console.log(ar);


let arr0 = [10, 20, 30, 40, 50];

let resultt = arr0.splice(1, 2);

// console.log(resultt);
// console.log(arr0);


let aaaa = [1, 2, 3];
let bbbb = [4, 5, 6];

let resuult = [...aaaa, ...bbbb];

// console.log(resuult);



let aarr = [1, [2, 3], [4, [5, 6]]];

// console.log(aarr.flat());
// console.log(aarr.flat(2));


// console.log(Array.from("JavaScript"));



let nums = [1, 2, 3, 4, 5];

let reesult = nums.map((nums) => nums * 3); 

// map() har element par operation karta hai aur new array return karta hai.

let tt = nums.map((nums)=>nums *10 )
let uu = nums.map((nums)=> nums +5)

// console.log(reesult);
// console.log(tt);
// console.log(uu)






let nuuums = [10, 15, 20, 25, 30];

let rresult = nuuums.filter((nuuum) => nuuum > 20);

//filter() sirf un elements ko rakhta hai jo condition satisfy karte hain

// console.log(nuuums.filter((nuuums)=> nuuums>11))

// console.log(rresult);




let numsss = [5, 12, 18, 25, 30];

let resssult = numsss.find((numsss) => numsss > 20);

// console.log(resssult);

// find() first matching element return karta hai.


let hnhn = [2, 4, 6, 8];

// console.log(hnhn.some((num) => num > 5));
// console.log(hnhn.every((num) => num > 5));

// some() → kya kam se kam ek element condition satisfy karta hai? → true

//every() → kya sabhi elements condition satisfy karte hain? → false


let ii = [1, 2, 3];

let resuuult = ii.push(4);

// console.log(ii);
// console.log(resuuult);

//push() array ko modify karta hai, but push() return karta hai new array ki length.




let numbers = [1, 2, 3, 4, 5, 6];

let rrrr = numbers
    .filter((numbers) => numbers % 2 === 0)
    .map((numbers) => numbers * 10);

// console.log(rrrr);



let aka = [10, 20, 30, 40];

let resulting = aka.reduce((acc, num) => {
    return acc + num;
}, 0);

console.log(resulting);


// 0 + 10 = 10
// 10 + 20 = 30
// 30 + 30 = 60
// 60 + 40 = 100

// reduce() ka use array ki values ko ek single result mein combine karne ke liye hota hai.