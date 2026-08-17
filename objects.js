//object (constructur) singleton = object.create


// object literal

const mysym = Symbol("KHAN")

let user1 = {
    name : "subhan",
    "full-name" : "mohd-subhan-khan",
    [mysym] : "MYKHAN",
    age : 23,
    location : "lucknow",
    email : "khanmohdsubhan876@gmail.com",
    isLoggedIn  : false,
    lastlogindays : ["monday", "wednesday", "friday"]

}

// console.log(user1.name)
// console.log(user1["email"]);
// console.log(user1["full-name"]);
// console.log(user1[mysym]);

user1.age = 25
Object.freeze(user1)
user1.age = 45

// console.log(user1);





const tuser = {}

tuser.name = "lovvy"
tuser.id = "123abc"
tuser.isLoggedIn = false

// console.log(tuser);

const luser = {
    email : "khan@gmail.com",
    username: {
        fullname : {
            firstname : "subhan",
            lastname : "khan"
        }
    }
}

// console.log(luser.username.fullname.lastname)

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {5 : "e", 6 : "f"}

// const obj4 =Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    { 
        idd : "123456",
        emails : "aa@google.com"
    },
    {
        names : "dog",
        add : "hardoi"
    },
    {
        firsttname : "zainab",
        lasttname : "fatima"
    }
]

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);


// console.log(Object.keys(tuser))
// console.log(Object.values(tuser))
// console.log(Object.entries(tuser))
// console.log(tuser.hasOwnproperty('isLoggedIn'));


const course = {
    courseName : "js-hindi",
    teacherName : "hitesh",
    price : "999    "
}

const { teacherName : naam}= course
// console.log(teacherName);
console.log(naam);




