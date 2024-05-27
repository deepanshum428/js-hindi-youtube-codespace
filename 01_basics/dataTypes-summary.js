// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const oisLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 8634869283740237n


// Reference(no primitive)

// Array, Objects, Function

const heros = [ "shaktiman", "naagraj", "doga"]
let myObj = {
    name: "deepanshu",
    age: 22,

}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof oisLoggedIn,outsideTemp);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// *********************************************

// stack(Primitive), Heap (non primitive) 

let myYoutubeName = "hiteshchoudharydotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);