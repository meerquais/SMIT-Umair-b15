console.log("JS Connected!");

// filter()

// let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];

// arr.filter(function(element , index , array){
//     // block of code 
// })


// let even = arr.filter(arr => arr % 2 === 0);
// let odd = arr.filter(arr => arr % 2 === 1);
// console.log(even);
// console.log(odd);
// console.log(arr);


// let ages = [15, 21, 17 , 30];

// let adults = ages.filter(ages => ages >= 18);
// console.log(adults);

// map() - 

// arr.map(function(element , index , array){
//     // return new values
// })


// let nums = [1 , 2 , 3 , 4 , 5];

// let doubled = nums.map( nums => nums * 2 );

// console.log(doubled);


// let  names = ["ali" , "meer" , "hafeez"];

// let capitalized = names.map(name => name.toUpperCase());

// console.log(capitalized);
// let  names = ["ali" , "meer" , "hafeez"];

// // Mr . ali , Mr. meer , Mr hafeez
// let array =  names.map(name => "Mr. " + name);
// console.log(array);

// reduce()


// array.reduce(function(accumlator, currentValue , index , array){
//     // block of code 
// });


// let nums = [1 , 2 , 3 ,4 ,5 ];

// let sum = nums.reduce((acc,num)=> acc + num, 0 );

// console.log(sum);

// let nums = [10,45,32,78,5];
// // let max = nums.reduce((prev , curr) => {
// //    return prev < curr ? curr : prev;
// // });

// let max = nums.reduce((acc,val)=>(val > acc ? val : acc), nums[0]);
// console.log(max)


// let fruits = ["apple" , "banana" , "apple" , "orange" , "banana" , "apple"];

// let count = fruits.reduce((acc , fruit)=>{
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
// }, {});

// console.log(count);


// date and time 
// let now = new Date();

// console.log(now);

// let customeDate = new Date("2025-05-05T19:05:00");
// console.log(customeDate);
// Year , Month , day , hour , mins  
// let manual = new Date(2025,0,1,7,30);

// console.log(manual)

// Get Methods 

// .getFullYear() = Saal nikalta hai (eg, 2025);
// .getMonth()  = Mahina (0 se 11);
// .getDate() = din (1 se 31);
// .getDay() = week ka din(0 = sunday se 6= saturday);
// .getHours() = Ghante(hours) (0 se 23);
// .getMinutes() = Minutes(0 se 59);
// .getSeconds() = seconds (0 se 59);
// .getMilliseconds() = Milliseconds (0 se 999);
// .getTime() = 1 jan 1970 se ab tak milliseconds; get us time since epoch


// let date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());



// Set Methods - Date ko update karna 

// .setFullYear() = Saal set karta hai.
// .setMonth() = Mahina set karta hai.
// .setDate() = din set karta hai.
// .setHours() = ghanta(hours) set karta hai


// let date = new Date();

// date.setFullYear(2030);
// date.setMonth(11);
// date.setDate(31);
// date.setHours(23);

// console.log(date)

// Formatting Date and Time. 

// toDateString();

// let date = new Date();

// console.log(date.toDateString());
// console.log(date);

// console.log(typeof date.toDateString());

// toTimeString();

// console.log(date.toTimeString());

// toLocaleString()

// console.log(date.toLocaleString());


let date = new Date();

let formattedDate = `${date.getDate()} - ${date.getMonth()+1} - ${date.getFullYear()}`;

console.log(formattedDate)






