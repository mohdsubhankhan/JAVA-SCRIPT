function greet() {
    // console.log("Hello");
}

greet();


// ****************** function with parameter************

function add (a,b){            
    // console.log(a+b);
}

add(10,40)

// **************************** global scope **************

let name =  " subhan"

function one(){
// console.log(name);

}
one()

// ********************** function scope ******************

function two (){
    let age = 23
    // console.log(age);
    
}
two()

// console.log(age)    error


// ********************* . Block Scope  *************
// A block is generally { }, such as inside if, for, etc.

if (true){
    let a = 12
    let b = 15
}
// console.log(a);     error 
// console.log(b);         error


//   let and const are block-scoped.

//   *********Very Important Scope Example*********

let c = 10;

function three (){
        let d = 20;
        if (true){
            let e = 30 ;
            // console.log(c);
            // console.log(d);
            // console.log(e);
            // console.log(c+d+e);

            
        }
}
three()


//     ************ Inside the if block:  ***********

// x → accessible because it is global.
// y → accessible because it belongs to the outer function.
// z → accessible because it belongs to the current block.

// This is related to lexical scope.



// ************* practice questions*****

function sayHello (){
        // console.log("Hello, JavaScript!");
        
}
sayHello()


// let input = Number(prompt("Enter Number"))
 function square (num11){
    return num11 * num11
     
      
 }
//  console.log(square(8));



 function multiply(num1,num2) {
    return num1 * num2
    
 }
    // console.log(multiply(4,7));



 function test() {
    // console.log("Hello");
}

test();
test();


function addd (a,b){
    return a+b
}
let x = addd(8,6)
// console.log(x);



function calculate(a, b) {
    return a * b;
}

// console.log(calculate(3, 4));
// console.log(calculate(5, 2));


function checkEven(number){
    if (number % 2 === 0){
        return true
    }
    else{
        return false
}}
// console.log(checkEven(10));
// console.log(checkEven(9));

function checkOdd(number){
    if (number % 2 === 0 ){
        return false
    }
    else{
        return true
    }
}
// console.log(checkOdd(10));
// console.log(checkOdd(9));



let abc = "subhan mantasha"
function abd(){
    // console.log(abc)
}
abd()   // it is work because abc is a global scope 

function testt (){
    let age = 23
}
testt ()
// console.log(age);    // it is not work because it is a block scope  its gives a error





// let bb = 10;

function test() {
    let bb = 67;
    // console.log(bb);
}   

test();

// console.log(bb);


function tesst() {
    if (true) {
        let h = 100;
        // console.log(h);
    }

    // console.log(h);
}

tesst();


function calculates (a,b, operation){
    if( operation === "add"){
        return a + b ; 
    }
    else if ( operation === "substract"){
        return a - b ;
    }
    else if( operation === "multiply"){
        return a * b ; 
    }
    else if( operation === "divide"){
        return a / b ;
    }
    else {
        return "Invalid Operation"
    }
     }

    //  console.log(calculates(10,9, "multiply"));
     




    //  ************ this function   ***************


    const studentss = {
        name1 : "mr subhan khan",
        age1 : 23,

          sayHelloo: function()  { 
            // console.log(`${this.name1}, welcome to the website`);
            // console.log(`${this.age1}, welcome to the website`);
            // console.log(this);
        }
    }
    studentss.sayHelloo()


    const person = {
        name2 : "zainab khan",
        age : 23,

        welcomemsg : function () {
            console.log(`${this.name2}, welcome to the website`);    
        }
    }
    // person.welcomemsg()
    // person.name2 ="mantasha khan"
    // person.welcomemsg()


    function chai (){
        // console.log(this);  
    }
    chai()
    

    function hh (){
        username : "subhan"
        // console.log(this.username);   
    }
    hh()

    const gg = function (){
        username : "subhannn"
        // console.log(this.username); 
    }
    gg()

    // **************** arrow functions *************

    const hhh =  () => {
        username : "abc"
        // console.log(this);
        // console.log(this.username);
        
    }
    hhh()

    const fig = (num1, num2) => {
        return num1 * num2             // explicit return
    }
    // console.log(fig(3, 8))



    const gig = (num1, num2) =>  num1+num2   // imlicit return 
    // console.log(gig(78,12));


     const gigi = (num1, num2) =>  (num1-num2)   // 2 imlicit return 
    // console.log(gigi(72,12));


    const gggg = (num1,num2) => ({username : "subhan"})
    // function me object 
    // console.log(gggg(72,12));
    


    // **** (IIFE) immediately invoked function expression ****

    (function ghg (){
        // console.log(`DB CONNECTED`);
    }) ();  // named iife
    

    ((name)=>{
        // console.log(`DB CONNECTED TWO ${name}`)
    })("SUBHAN")  // unnamed iife



    

    const adddd = function (a, b) {
    return a + b;
}
// console.log(adddd(70,50));


const addds = (a,b) => {
    return a+b
    } 
    // console.log(addds(87,98));
    

 const ad = (a,b) => (a*b)
//  console.log(ad(10,20));


 const asss = (a,b) => a/b
//  console.log(asss(10,2));
 
 


    const personn = {
    name: "Subhan",

    greet: function() {
        // console.log(this.name);
    }
};
personn.greet();



const car = {
    brand: "BMW",

    showBrand: function() {
        // console.log(this);
    }
};
// car.showBrand();



const testss = () => {
    return 10 + 20;
};
// console.log(testss());




const calculator = {
    a: 20,
    b: 10,

    add() {
        return this.a + this.b;
    },

    subtract() {
        return this.a - this.b
    },

    multiply() {
        return this.a * this.b
    }
};

console.log(calculator.add());       // 30
console.log(calculator.subtract());  // 10
console.log(calculator.multiply());  // 200


const employee = {
    name: "Subhan",
    salary: 25000,

    showdetails : function (){
        console.log(`NAME: ${this.name}`);
        console.log(`SALARY: ${this.salary}`);
        
    }
};
// employee.showdetails()