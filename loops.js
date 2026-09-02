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
  //  console.log(`value is ${mearr[j]}`);
    j++
}



let score = 11
do {
  //  console.log(`score value is ${score}`);
    score = score+1
    
} while (score<=10);



// ********************  high order loops **********


//for of   {print value directly}

const arr = ["subhan", "areeb", "alman", "ahtesham", "adnan", "samad"]

for (const num of arr) {
    // console.log(num);
}

const arr2 = [1,2,3,4,5,6,7,8]
for (const ar2 of arr2) {
    // console.log(`each array is ${ar2}`);
}

const arr3 = "subhan khan"
for (const ar3 of arr3) {
    // console.log(`each character is ${ar3}`);
}

// map   this is known for uniqeu value 

const mapp = new Map()
mapp.set('name' , "subhan")
mapp.set('age' , "23")
mapp.set('gender' , "male")

// console.log(mapp);

for (const key1 of mapp) {
    // console.log(key1);
    
}

for (const [key,value] of mapp) {
    // console.log(key, `:-`, value);
}


const myobj = {
    'game1' : 'nfs',
    'game2' : 'spidy',
    'game3' : 'got'
}

// for (const [key , value] of myobj) {
    // console.log(key, `:-`, value);
// }


// for in loop

const myobj1 = {
    js : "javascript",
    cpp : "c++",
    swift : "swift by apple",
    py : "python"
}

for (const key in myobj1) {
    // console.log(key);
}

for (const key in myobj1) {
    // console.log(myobj1[key]);
}

for (const key in myobj1) {
    // console.log(`${key} is shortcut for ${myobj1[key]}`);
}


const aarr = ["java script", "cpp", "python", "swift", "c#"]

for (const key in aarr) {
    // console.log(key);
}

for (const key in aarr) {
    // console.log(aarr[key]);

}





// for each loop 



const coding = ["java script", "cpp", "python", "swift", "c#", "java"]

// coding.forEach(  function (value) {
//     // console.log(value);
// })

// coding.forEach(  (item)  =>  {
// console.log(item);
// })

// function print (val1){
// console.log(val1);
// }

// coding.forEach(print)

// coding.forEach(  (item, index, array)=> {
// console.log(item, index, array);
// })


const myarr2 = [
    {
        langName : "javaScript",
        langFileName : "js"
    },
    {
        langName : "python",
        langFileName : "py"
    },
    {
        langName : "cpp",
        langFileName : "c++"
    },
    {
        langName : "c#",
        langFileName : "C-sharp"
    }
]

// myarr2.forEach(  (item) =>  {
//     console.log(item.langFileName);
// })



// fiter and map 


// const coding11 = ["java script", "cpp", "python", "swift", "c#", "java"]

//  const add = coding11.forEach(  (item)  =>  {
//    console.log(item);
//    return item
//  })

//  console.log(add);
 

 const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const newNums = mynums.filter(  (num)=> num>4)

//  const newNums = mynums.filter(  (num)=> {
//     return num>4
//  })

const newNums = []

mynums.forEach(  (num)=>{
    if (num>4) {
        newNums.push(num)
    }
})
//  console.log(newNums);
 
 

 // practice for filter 


 const Books = [
    {
        tittle : "book one", genre : "history", publish : "1986", edition : "1997"
    },
    {
        tittle : "book two", genre : "science", publish : "1994", edition : "2010"
    },
    {
        tittle : "book three", genre : "non fiction", publish : "1990", edition : "2007"
    }, 
    {
        tittle : "book four", genre : "non fiction", publish : "1982", edition : "1995"
    },
    {
        tittle : "book five", genre : "science", publish : "2001", edition : "2015"
    },
    {
        tittle : "book six", genre : "history", publish : "1980", edition : "1999"
    },
    {
        tittle : "book seven", genre : "non fiction", publish : "1981", edition : "1991"
    },
    {
        tittle : "book eight", genre : "science", publish : "1988", edition : "2002"
    },
    {
        tittle : "book nine", genre : "history", publish : "1997", edition : "2020"
    }
 ]

 let userbooks = Books.filter(  (bk)=> { 
    return bk.genre==="history"
})
// console.log(userbooks);

userbooks = Books.filter(  (bk) => bk.publish > "1990" && bk.edition > "2000")
// console.log(userbooks);


const myynuums = [1,2,3,4,5,6,7,8,9,10]

// let newwnums = myynuums.map(  (num)=> num + 10)
let newwnums = myynuums.map(  (num)=> { return num + 10})


// console.log(newwnums);



// chaining 

const myynuums1 = [1,2,3,4,5,6,7,8,9,10]

let updateArr = myynuums1.map(  (num)=> num*10).map(  (num)=> num+3).filter(  (num)=>num>=53)

// console.log(updateArr);

// reduce method 

const myNewArr = [1,2,3,4,5]

// let totalArr = myNewArr.reduce(function (acc, curr) {
// return acc+curr
// },0)

let totalArr = myNewArr.reduce(  (acc,curr)=>(acc+curr),0)
console.log(totalArr);



const ShoppingCart = [
    {
        courseName : "js course",
        price : 999
    },
    {
        courseName : "py course",
        price : 1999
    },
    {
        courseName : "full stack  course",
        price : 2999
    },
    {
        courseName : "mobile developement course",
        price : 3999
    },
    {
        courseName : "data science course",
        price : 4999
    }
]

let totalPay = ShoppingCart.reduce(  (acc, item)=> acc+item.price , 0 )
console.log(totalPay);
