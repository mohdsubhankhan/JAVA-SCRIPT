// ***************1. What is an Object?***************

// *********An object stores data in key-value pairs************

const student = {
    name : "subhan",
    age : "23",
    course : "BCA",
    skills : ["html", "css", "javascript"]
}

// console.log(student.name);    //********How to access an Object
// console.log(student.age);     //********How to access an Object

// console.log(student["name"]);  //********Bracket notation
// console.log(student["age"]);   //********Bracket notation


// *****************  When the key is stored in a variable

let key = "name";             

// console.log(student[key]);


// console.log(Object.keys(student))
// console.log(Object.keys(student)[3])

// console.log(Object.values(student))
// console.log(Object.values(student)[3])


 //*****************It converts an object into an array of [key, value] pairs. == entries

// console.log(Object.entries(student))   

// console.log(Object.entries(student)[3])

// console.log(Object.entries(student)[0][1])


//  ********************Assign ===  Object.assign() copies properties from one or more objects into another object

const obj1 ={
    name : "zainab"
}

const obj2 ={
    age : 25
}

// console.log(Object.assign(obj1, obj2));  



 //**************The {} is the target object.


 const results = Object.assign({}, obj1, obj2) 

// console.log(results);


// *********** This is used when you don't want an object to be changed.(object.freeze(boys))

const boys = {
    name : "alman",
    age : 12
}

Object.freeze(boys)

boys.name = "ramsha"  
boys.age = 15  

// console.log(boys);

//*******Check whether an object is frozen:

// console.log(Object.isFrozen(boys))



// **************** The nested object can still be changed because the freeze doesn't recursively freeze nested objects.

const userr = {
    name: "Subhan",
    address: {
        city: "Bareilly"
    }
};

Object.freeze(userr);

userr.address.city = "Delhi";

// console.log(userr.address.city);



// ************* Object.seal()  Another useful method:**********

// With seal():

// You cannot add new properties.
// You cannot delete properties.
// But You can modify existing properties

const user11 = {
    name: "Subhan",
    age: 23,
    add : "lucknow"
};

// Object.seal(user11);
user11.name = "zainab"
user11.city="uttar pradesh"
delete user11.add;
// console.log(user11)

// freeze → can't add + delete + modify
// seal   → can't add + delete, but can modify


// Check whether property exists

// console.log("name" in user11);

// console.log(user11.hasOwnProperty("name"));



// ******************  Object destructuring  **********


const student1 = {
    name : "subhan",
    age : 45,
    add : "alambagh"
}

const {name, age } = student1
// console.log(name)
// console.log(age)  


// this is used instead of this ↓

// console.log(student1.add)


// *****************  LOOP ***********

for (const key in student1) {
    // console.log(key);

    // console.log(student1[key]);    //To get values:

    //  console.log(key, student1[key]);   //And key + value:
    
}