// the classic for loop 


for (let index = 1; index <= 10; index++) {
    // console.log(index);
}


// while loop 
// "Keep doing this while the condition is true."


let i = 1;
while (i<=5) {
    // console.log(i);
    i++;
}


// do while loop
//This is slightly different.
// It executes the code at least once, then checks the condition.

let j = 11;
do {
    // console.log(j);
} while (j<=10);


// for...of ⭐
// Very useful for arrays.

const fruits = ["apple", "banana", "mango", "kiwi", "grapes"]

for (const fruit of fruits) {  // its gives you direct values of array
    // console.log(fruit);
}

for (const index in fruits) { // its gives you indexes of array like (0,1,2,3,4)
    // console.log(index);
}



// for...in
// Usually used for objects.

const user = {
    name : "subhan",
    age : 23,
    add : "lucknow"
}
for (const key in user) {
    // console.log(key);
    // console.log(user[key]);
    // console.log(`KEY :- ${key}= VALUE :- ${user[key]}`);
}


// Easy memory trick
// of → values
// in → keys/indexes



// forEach() ⭐
// forEach() is an array method.

const number = [1,2,3,4,5,6,7,8,9,10]
number.forEach(function(num){
    // console.log(num);
})
 
number.forEach( (num)=>{
// console.log(num);
})

number.forEach( (num,index)=>{  // by this you can also get index
// console.log(index,num);
})

// forEach() is mainly for doing something with every item.


// map() ⭐⭐⭐
// This is one of the most important methods in modern JavaScript.
// map():
// Takes every item → transforms it → returns a new array.

const number1 = [1,2,3,4,5]
// const double = number1.map((num)=>{
//     return num*2
// })

const double = number1.map((num)=> (num*2))
// console.log(double);


// real world situation  of map 


const user1 = [
    {
        name : "subhan",
        age : 23,
        add : "alambagh",
        mobile : 6388658841
    },
    { 
        name : "priya",
        age : 29,
        add : "charbagh",
        mobile : 7687985645
    },
    {
        name : "rajan",
        age : 26,
        add : "lalbagh",
        mobile : 8976541954
    }
]

// Another example

// Add 1 year to everyone's age:

const updateuser1 = user1.map((user)=> ({
    ...user,
    age:user.age+1
}))
// console.log(updateuser1);


    const name1 = user1.map((user)=>user.mobile)
    // console.log(name1);
    

//     filter() ⭐⭐⭐
// filter() means:
// "Give me only the items that satisfy this condition."

const number2 = [10,20,30,40,50]
const result = number2.filter((num)=>num>=30)

// console.log(result);


// map    → CHANGE
// filter → SELECT


// real world situation  of filter

const products = [
    {name : "laptop", price : 50000},
    {name : "mouse", price : 750},
    {name : "monitor", price : 14000},
    {name : "keyboard", price : 2500}
]

const result1 = products.filter((prdt)=>prdt.price<10000)
// console.log(result1);



// reduce() ⭐⭐⭐⭐⭐
// This is initially confusing, but extremely powerful.
// reduce() means:
// Take many values and reduce them into one final value

const  number3 = [10,20,30,40,50]
// const total = number3.reduce((acc,curr)=> (acc+curr),0)
// console.log(total);

const total1= number3.reduce((acc,curr)=>{
    return acc+curr
})
// console.log(total1);


// Where is reduce() used?
// This is where reduce() becomes very useful.
// 1. Total price 

const cart = [
    {name : "laptop", price : 50000},
    {name : "mouse", price : 750},
    {name : "monitor", price : 14000},
    {name : "keyboard", price : 2500}
]

const total3 = cart.reduce((acc,curr)=>acc+curr.price,0)
// console.log(total3);


// 2. Find maximum


const numbers4 = [10, 50, 20, 90, 30];

const max = numbers4.reduce((max, number) => {
    return number > max ? number : max;
}, numbers4[0]);

// console.log(max);



// 3. Count occurrences
// Very useful logic.


const fruits2 = ["apple", "banana", "apple", "mango", "banana", "apple"];

const count = fruits2.reduce((result, fruit) => {
    result[fruit] = (result[fruit] || 0) + 1;
    return result;
}, {});

// console.log(count);


//combine question

const products1 = [
    { name: "Laptop", price: 50000, category: "electronics" },
    { name: "Mouse", price: 500, category: "electronics" },
    { name: "Shirt", price: 1500, category: "clothing" },
    { name: "Shoes", price: 3000, category: "clothing" }
];

//Get only electronics:
const item1 = products1.filter((elc)=>(elc.category === "electronics"))
// console.log(item1);

//Get only product names:
const item2 = products1.map((prdct)=>prdct.name)
// console.log(item2);

// Calculate total price:
const item3 = products1.reduce((acc,curr)=>acc+curr.price,0)
// console.log(item3);

// Find electronics and get their names:
const item4 = products1.filter((product)=>(product.category==="electronics")).map((product)=>(product.name))
// console.log(item4);


// practice questions 

// 1:

for (let index = 1; index <=20; index++) {
    // if (index===9){
    //     break;
    // }
    // console.log(index);
}


// 2:  Print only even numbers from 1 to 50.


for (let index = 1; index <=50; index++) {
    if(index % 2 == 0){
        // console.log(index); 
    }
}


// 3: Print only odd numbers from 1 to 50.


let index = 1;
while (index<=50) {
    if (index % 2 != 0) {
    //  console.log(index);   
    }
    index++
}


// 4:  Calculate the sum of numbers from 1 to 100.


let sum = 0;
for (let index = 1; index <= 100; index++) {
    sum = sum+index
}
//    console.log(sum);



// 5: reverse array


const numbersa = [1, 2, 3, 4, 5];
const reversed = [];

for (let i = numbersa.length - 1; i >= 0; i--) {
    reversed.push(numbersa[i]);
}
// console.log(reversed);



// 6: double number of array


const numb = [2, 4, 6, 8];
// console.log(numb.map((num)=>num*2))


// 7:


const namess = ["rahul", "aman", "priya", "rohit"];
// for (const element of namess) {
//     // console.log(element.toUpperCase());    
// }

const uparr = namess.map((num)=>num.toUpperCase())
// console.log(uparr);



// 8 : find the ages

const userr1 = [ 
{ name : "zainab", age : 23},
{ name : "mantasha", age : 24},
{ name : "zikra", age :26},
{ name : "laiba", age : 21}
]

const agess = userr1.map((num)=>num.age)
// console.log(agess);


// 9: 

const numberss3 = [5, 12, 18, 3, 25, 30, 7];
const comp = numberss3.filter((num)=>num>15)
// console.log(comp);

// 10:

const userss1 = [
    { name: "A", age: 15 },
    { name: "B", age: 21 },
    { name: "C", age: 17 },
    { name: "D", age: 25 }
];

const filt = userss1.filter((num)=>(num.age>18))
// console.log(filt);

// 11:

const productss11 = [
    { name: "Laptop", price: 60000 },
    { name: "Mouse", price: 800 },
    { name: "Phone", price: 30000 },
    { name: "Keyboard", price: 1500 }
];

const prdt = productss11.filter((num)=>num.price>20000)
// console.log(prdt);


//12:

const numbersss1 = [10, 20, 30, 40, 50];
const total11 = numbersss1.reduce((acc,curr)=>acc+curr,0)
// console.log(total11);


// 13:

const number111 = [10, 45, 23, 89, 12, 67];

// const maxx = number111.reduce((acc,curr)=>{
//     return curr > acc ? curr : acc;
// }, numbers4[0])
// console.log(maxx);

const maxxx = Math.max(...number111)
// console.log(maxxx);


// 14:

const cart1 = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];
const cartvalue = cart1.reduce((acc,curr)=>acc+curr.price,0)
// console.log(cartvalue);


// 18 :
const students11 = [
    { name: "Rahul", marks: 85 },
    { name: "Aman", marks: 45 },
    { name: "Priya", marks: 92 },
    { name: "Rohit", marks: 35 }
];
const find = students11.filter((student )=>student.marks>=50).map((student)=>student.name)
// console.log(find);

// 19:

const employees = [
    { name: "A", salary: 30000 },
    { name: "B", salary: 45000 },
    { name: "C", salary: 25000 },
    { name: "D", salary: 60000 }
];
const totalSalery = employees.reduce((acc,curr)=>acc+curr.salary,0)
// console.log(totalSalery);


// 20: 


 const orders = [
    { product: "Laptop", price: 50000, quantity: 2 },
    { product: "Mouse", price: 500, quantity: 3 },
    { product: "Keyboard", price: 1500, quantity: 2 }
];
const totalBill = orders.reduce((acc,curr)=> (acc+(curr.price * curr.quantity)),0)
console.log(totalBill);




