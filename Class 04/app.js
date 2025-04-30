console.log("JavaScript Connected.");



// function functionName(){
//     // code block // block of code 
// }


// function greet(){
//     console.log("Hello, Students!");
    
// }


// greet(); // calling the function!

// function showLine(){
//     console.log("---------------------");
    
// }

// showLine();
// showLine();
// showLine(); // reusability 


// function greetUser(name){
//     console.log("Hello " + name);
// };



// greetUser("Ali");
// greetUser("Hafeez")
// greetUser("Meer")


// function add(a , b){
//     console.log("Sum is: " , a + b);
// };


// add(5,6); 
// add(10,25); 


// function areaOfRectangle(length, width){
//     console.log("Area is: " , length * width);
    
// };

// areaOfRectangle(18,2)


// function multiply(a,b){
//     return a * b;
// }

// let result = multiply(4,5);

// console.log(result);

// function getGreeting(name){
//     return "Hello " + name + "!";
// }

// let greetMsg = getGreeting("Zain Ali");

// console.log(greetMsg);

// function isEven(num){
//     return num % 2 === 0
// }

// console.log(isEven(10));
// console.log(isEven(7));


// const sayHi = function(){
//     console.log("Hi There!");
// }

// sayHi()


// const square = function(n){
//     return n * n;
// }

// console.log(square(2))

// Arrow Functions syntax 

// const foo = ()=>{
//     //code of block // block of code 
// }


// const greet = ()=>{
//     console.log("Arrow Function says Hello!");
    
// }


// greet()


// const multiply = (a,b)=> a * b;


// console.log(multiply(3,5))

// function greet(name = "Guest"){
//     console.log("Hello, " + name)
// }

// greet("Ali");
// greet();


// const calculate = (a = 1 , b = 1) => {
//     return a + b;
// }

// console.log(calculate(4, 5 ));



// function outer(){
//     console.log("Outer Function!");

//     function inner(){
//         console.log("Inner Function!");
//     }

//     inner()
// }


// outer()



// function fullName(firstName , lastName){
//     function combine(){
//         return firstName + " " + lastName;
//     }
//     return combine();
// }


// console.log(fullName("Meer" , "Quais"));

// IIFE = Immediately Invoked function expression!


// (function(){
//     console.log("This runs immediately!");
// })();


// (function(name){
//     console.log("Welcome, " + name);
// })("Meer")

// let person = {
//     name: "Ali",
//     sayHi: function(){
//         console.log("Hi " + this.name)
//     }
// };

// person.sayHi();

// function greet(name, callback){
//     console.log("hello " + name);
//     callback();
// }

// function sayBye(){
//     console.log("Goodbye!");
// }


// greet("Meer" , sayBye)

// setTimeout(function(){
//     console.log("This message appears after 2 seconds!")
// } , 2000);



// let num = [1 , 2 ,3,4,5 , 6, 7,8];

// num.forEach(function(num){
//     console.log(num * 2);
// })



// let num = [3,7,15,9,21];
// let target = 115;

// let isFound = false;


// for(let i = 0 ; i < num.length; i++){

//     if(num[i]=== target){
//         isFound = true;
//         console.log("Number found at index: " , i);
//         break;
//     }

// }

// if(!isFound){
//     console.log("Number not found in the array!");
// }

// let num = [10, 5 , 3 , 15 , 8 , 12];
// let allPositive = true;


// for(let i = 0; i < num.length; i++){
//     if(num[i] < 0){
//         allPositive = false;
//         console.log("Negative number found:", num[i]);
//         break;
//         }
// }
// if(allPositive){
//     console.log("All numbers are positive!"); 
// }



let tasks = [];


function addTask(){
    let input = document.getElementById("taskInput");
    let value = input.value.trim();

    if(value === "") return;

    tasks.push(value);
    input.value = "";
    renderTasks();
}

function renderTasks(){
    const taskList = document.getElementById("taskList");
    const searchQuery = document.getElementById("taskInput").value.toLowerCase();

    taskList.innerHTML = "";

    tasks.forEach((task, index)=>{
        if(task.toLowerCase().includes(searchQuery)){
            let li = document.createElement("li");

            li.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>`;
            taskList.appendChild(li)
        }
    })
}


function editTask(index){
    const newTask = prompt("edit your task:", tasks[index]);

    if(newTask !== null && newTask.trim() !== ""){
        tasks[index] = newTask.trim();
        renderTasks();
    }
}

function deleteTask(index){
    tasks.splice(index,1);
    renderTasks();
}

document.getElementById("taskInput").addEventListener("input", renderTasks)