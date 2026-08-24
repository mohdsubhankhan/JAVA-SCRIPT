// ternary operator 

let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
// console.log(result);


let marks = 90;
// console.log(marks >=33 ? "pass" : "fail");


let marks2 = 32;
// console.log(marks2 >= 33 ? "you passed" : "you fail");


let marks3 = 15;
// console.log(marks3 >= 33 ? "true1" : "fail1");



// simple if else 

    let age1 = 20;

if (age1 >= 18) {
    // console.log(result = "Adult");
} else {
    console.log(result = "Minor");
}


// ********** Loops (iterations) ***************

for (let i = 1; i <= 10; i++) {
    // console.log(`this is my outer loop ${i}`);
    
     for (let j = 1; j <=10; j++) {
        // console.log(`this is my inner loop ${j}`);
     } 
}



for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        // console.log("5 is the best number");
    }
    //   console.log(i);
}

// *********** array printing*********


let myarr =["subhan", "areeb", "ahtesham", "alman", "adnan", "samad"]

        // console.log(myarr.length);
        
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    // console.log(element);
}


// ************* break & continue


for (let i = 1; i <= 20; i++) {
    const element = i;

    if (i==5) {
        // console.log(`5 is dedect`);
        break
    }
    // console.log(i);  
}


for (let i = 1; i <= 20; i++) {
    const element = i;

    if (i==5) {
        // console.log(`5 is dedect`);
        continue
    }
    // console.log(i);
}



//   ************* while and do while loop 

let i = 0
while (i<=10) {
    // console.log(`value of index is ${i}`);
    i = i +2
}

let mearr = ["subhan", "areeb", "ahtesham", "alman", "adnan", "samad"]

let j = 0

while (j<mearr.length) {
    console.log(`value is ${mearr[j]}`);
    j++
}



let score = 11
do {
    console.log(`score value is ${score}`);
    score = score+1
    
} while (score<=10);