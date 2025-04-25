
// Length

// let name = "Meer Quais"

// console.log(name.length);

// Slice 

// let msg = "Welcome To JavaScript!";

// console.log(msg.slice(11));
// console.log(msg.slice(0,7));
// console.log(msg.slice(-11));


// substring 

// let text = "JavaScript";

// console.log(text.substring(0,4));
// console.log(text.substring(4,0));

// replace ( search , newValue ) 


// let line = "Coding is fun";
// console.log(line);


// console.log(line.replace("fun" , "Hard"));

// let text = "Hello Hello";

// console.log(text);
// console.log(text.replace("Hello" , "Hi"));

// Advance example (global replace)

// let text = "Apple Banana Apple";

// console.log(text);
// console.log(text.replace(/Apple/g , "Orange"));

// let user = "MeEr QuAiS";

// console.log(user.toUpperCase());

// split(separator) string ko array mein convert karta hai.

// let sentence = "This is JavaScript! Course!";

// let words = sentence.split(" ");

// console.log(words)


// let str = "Rayne"

// console.log(str.split(""));


// let person = {
//     name: "Meer",
//     age: 25
// };


// object literal syntax 

// let car1 = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020
// }

// console.log(car1)

// creating Object using Constructor (new Object)

// let car = new Object();

// car.brand = "Toyota";
// car.model = "Corolla";
// car.year = 2020;

// console.log(car)



// let std = {
//     name: "Ali",
//     age: 20,
//     isEnrolled: true
// };
// console.log(std)
// console.log(std.name);
// console.log(std["isEnrolled"]);

// let user = {
//     name: "Hafeez",
//     adress: {
//         city: "Karachi",
//         zip: 75500
//     }
// };

// console.log(user.adress.zip);


// let inpName = prompt("Type your name")

// let person = {
//     name: inpName,
//     age: 29,
//     greet: function(){
//         return "Hello, my name is " + this.name 
//     }
// };

// console.log(person.greet());



// let obj = {
//     a:1,
//     b:2,
//     c:3
// };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// let profile = {
//     username: "meerquais",
//     country: "Pakistan"
// };

// let {username , country} = profile;

// console.log(username)

// for(initialization;condition;increment/decrement)


// for(let i = 1; i <=10; i++){
//     console.log("Number: ", i);  
// }


// let sum = 0;

// for(let i = 1; i <=5; i++){
//     sum += i;
//     console.log("sum is: " , sum)

// }

// console.log("sum is: " , sum)


// for(let i = 1; i <=5; i++){
//     if(i === 3){
//         break;
//     }
//     console.log("i is" , i)
// }

// console.log("next step")

// let arr = [4, 5, 7, 12 , 8 , 6];

// for(let i = 0; i < arr.length; i++){

//     if(arr[i] === 12){
//         console.log("Found 12");
//         break;
//     }
// }

// for(let i = 1; i <= 10; i++){
//     if( i === 5){
//         continue;
//     }
//     console.log("i is ", i)
// }


// for(let i = 1; i <= 20; i++){
//     if(i % 2 !== 1){
//         continue; // skip odd number
//     }
//     console.log(i)
// }

// for(let i = 1; i <= 5; i++){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += "* ";
//     }
//     console.log(row)
// }







