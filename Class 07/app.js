console.log("Js Connected!");

// Create Date Object

// let date = new Date("2025-05-07T18:30:00");
//                  year//month//day//hours//minutes
// let date = new Date(2025, 4 , 7 , 18 , 32)

// Get Date Methods 

// .getFullYear() - Saal nikalta hai
// .getMonth() - mahina ( 0 se 11 )
// .getDate() - din (1 se 31 )
// .getDay() - week ka din nikalta hai (0 = sunday , 6 = saturday)
// .getHours() - Ghante(0 se 23)
// .getMinutes() - Minutes (0 se 59)
// .getSeconds() - Seconds (0 se 59)
// .getMilliseconds() - milliseconds (0 se 999)
// .getTime() - 1 jan 1970 se ab tak ka Milliseconds deta hai.

// let date = new Date();
// console.log("Year:" ,date.getFullYear());
// console.log("Month:" ,date.getMonth());
// console.log("Date:" ,date.getDate());
// console.log("Day:" ,date.getDay());
// console.log("Hours:" ,date.getHours());
// console.log("Minutes:" ,date.getMinutes());
// console.log("Seconds:" ,date.getSeconds());
// console.log("MilliSeconds:" ,date.getMilliseconds());
// console.log("Time:" ,date.getTime());

// Set Methods

// .setFullYear() - Saal set karta hai.
// .setMonth() - Mahina set karta hai.
// .setDate() - din set karta hai.
// .setHours() - Ghanta set karta hai.

// let date = new Date();

// date.setFullYear(2030);
// date.setMonth(11);
// date.setDate(31);
// date.setHours(23);
// date.setMinutes(59)
// console.log(date);

// Formatting Date and Time

// toDateString(); get date in string
// toTimeString(); get time in string
// toLocaleString(); get time and date.

// let date = new Date();
// console.log(typeof date)
// console.log(typeof date.toDateString())
// console.log(typeof date.toTimeString())
// console.log(date.toLocaleString())

// let date = new Date();

// let formatted = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()},${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// console.log(formatted);


// setTimeout()

// setTimeout(function,delayInMillieseconds) 


// console.log("1: Start");

// setTimeout(function(){
//     console.log("2:This Runs after 2 seconds");
    
// },5000);

// console.log("3: End")

// setInterval()

// setInterval(function,delayInMilliseconds);

// setInterval(()=>{
//     console.log("Hello!");
// },2000);

// let myInterval = setInterval(()=>{
//     console.log("Running....");
// },2000);

// setTimeout(()=>{
//     clearInterval(myInterval);
//     console.log("Stopped.");
// },10000)


const eventDate = new Date("December 31, 2025 23:59:59").getTime(); // target date set karna

console.log(eventDate);

const timer = setInterval(()=>{

    const now = new Date().getTime(); // abhi ka time 

    let difference = eventDate - now ; // kitna time bacha 

    // time breakdown : days , hours , minutes and seconds

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // result show karna hai.

    document.getElementById("countdown").innerText = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds left`

    if(difference < 0){
        clearInterval(timer)
   

    document.getElementById("hours").innerText = "Happy New Year!" };

}, 1000)




