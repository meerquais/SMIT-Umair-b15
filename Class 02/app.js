console.log("Js Connected!");


// There are two types! 

// 1. Primitive Data Types!
// 2. Non-Primitive Data Types!


// Primitive Data Types!

// 1. Number // all types of numbers 
// 2. String // Text enclosed in Quotes (" ")
// 3. Boolean // True or False
// 4. Undefined // variable declare but no values assigned.
// 5. Null // intetional empty value!

// Non-Primitive Data Types!

// 1. Arrays - List of Element // Collection of Data.
// 2. Objects - key-value pairs ( used to store structured data )


// Variable - eik container ( dabba ) hai jo data ko temp store karta hai. 

// variable declare            // Initiziation 
// var name                        = "Meer"; 


// console.log(a); // undefined
// var a = 5; 


// var a; // ye line memory mein pehle hi set ho jaati hai.
// aur a = undefined karta hai. 

// console.log(a); // abhi tak value assign nahi hui. undefine. 

// a = 5; // execution phase mein value assign hoti hai.



// console.log(b); // output : ReferenceError : access 
// let b = 20; 

// console.log(c); // output : ReferenceError : access 
// const c = 25;


// Number 

// var age = 15;

// console.log(typeof age);

// String 

// var fullName = "12343545 23213423";

// console.log(typeof fullName , fullName);


// Boolean 
// var isActive = true;
// var isLoggedIn = false; 

// console.log(typeof isActive);

// Null 

// var result = null; 

// console.log(typeof result);

// Undefined

// let x; 

// console.log(typeof x)

// Object = 

let student = {
    name: "Ali",
    age: 25,
    isEnrolled: true
};

console.log(student.isEnrolled);


// Arrays = ordered collection of data.

// let fruits = ["Apple" , "Mango" , "Banana" , "Orange"];

// console.log(fruits[1]);

// let fruits = ["Apple" , "mango" , "orange"];


// fruits.pop(); // removes value from the last. 
// fruits.push("Banana" , "Strawberry"); // add values from the last.
// fruits.shift(); // removes value from start.
// fruits.unshift("Apple" , "Watermelon");

// console.log(fruits)

// splice 

// let colors = ["red" , "blue" , "green"] ; 

// colors.splice(start,deleteCount,add) ; 
// colors.splice(0,0,"Yellow" , "Brown")
// console.log(colors);

// Slice - copy of array

// let colors = ["red" , "blue" , "green"] ; 
// console.log(colors)

// let copy = colors.slice(0,2);

// console.log(copy)







