let scorePar = document.getElementById("score");
let rollDiceBtn = document.getElementById("roll-dice");
let user1ScorePar = document.getElementById("user1Score");
let user2ScorePar = document.getElementById("user2Score");

function rollDice() {
  let randomNumber1 = Math.random() * 6 + 1; //return a random number between 0.1 - 0.99
  let user1Die1 = Math.floor(randomNumber1);

  let randomNumber2 = Math.random() * 6 + 1; //return a random number between 0.1 - 0.99
  let user1Die2 = Math.floor(randomNumber2);

  let randomNumber3 = Math.random() * 6 + 1; //return a random number between 0.1 - 0.99
  let user2Die1 = Math.floor(randomNumber3);

  let randomNumber4 = Math.random() * 6 + 1; //return a random number between 0.1 - 0.99
  let user2Die2 = Math.floor(randomNumber4);

  let user1Score = user1Die1 + user1Die2;
  let user2Score = user2Die1 + user2Die2;

  user1ScorePar.textContent = `User1 Score:  ${user1Score} `;
  user2ScorePar.textContent = `User2 Score:  ${user2Score} `;

  if (user1Score > user2Score) {
    scorePar.textContent = "User 1 Wins!";
  } else if (user2Score > user1Score) {
    scorePar.textContent = "User 2 Wins!";
  } else {
    scorePar.textContent = "It's a tie!";
  }
}

// rollDiceBtn.addEventListener("click", function () {
//   rollDice();
// });

function userInput() {
  const inputBtn = document.getElementById("input-btn");
  const inputEL = document.getElementById("input-el");
  let ulEL = document.getElementById("ul-el");
  let errorMsg = document.getElementById("error-msg");

  let shoppingList = [];
  inputBtn.addEventListener("click", function () {
    // only push value to shoppingList array if inputEl.value is not empty
    ulEL.innerHTML = "";
    let removedWhiteSpace = inputEL.value.trim();

    if (removedWhiteSpace === "") {
      errorMsg.textContent = "Please enter an item";
      return;
    }

    shoppingList.push(removedWhiteSpace);

    for (let i = 0; i < shoppingList.length; i++) {
      console.log(shoppingList);
       ulEL.innerHTML += "<li>" + shoppingList[i] + "</li>";
                                // <li>Eggs</li>

                              
    }

    inputEL.value = "";
  });
}
userInput();

/*
//   // Random number between 0 and 1
//   let randomNumber = Math.random();
//   // console.log(randomNumber)

//   // Random number between 0 and 6

//   let randomNumber6 = Math.random() * 6;
//   // console.log(randomNumber6)

//   1 - 6;
//   let wholeNumber = Math.floor(4.23232323423534536456);

//   // console.log(wholeNumber)

//   let number = Math.floor(Math.random() * 3);

//   console.log(number);

// create a function saveInput()

// console log "Button Clicked" everytime the button is clicked"

function eventListener() {
  const inputBtnEL = document.getElementById("input-btn");

  inputBtnEL.addEventListener("click", function () {
    console.log("Event Listener Clicked");
  });
}

// create an event listener for "reset-btn". When the user Double Clicks ("dblclick") on the button it should console log. "Resetting web page"

function letConst() {
  // Bank account info
  const name = "Akeel";
  let accountBalance = 10;

  name = "Akeel2";
  console.log(name);

  accountBalance += 50;

  console.log(accountBalance);
}

function letVar() {
  // function scope (var)
  // block scope (let)
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  console.log("Value of i " + i);
}

function templateString() {
  const name = "Akeel";
  let age = 10;
  let sex = "male";

  // return "Hello my name is " + "" + name + " I am " + age + " years old"
  // console.log(`Hello my name is ${name} I am ${age} years old. I am a ${sex}`)
  return `Hello my name is ${name} I am ${age} years old`;
}

function car(modelName, makeName, modelYear) {
  return { make: makeName, model: modelName, year: modelYear };
}

// let JeepInfo = car("Wrangler", "Jeep", 2023)
// console.log(JeepInfo)

// let HondaInfo  = car("civic", "Honda", 2001)
// console.log(HondaInfo)

// function getTaskFromLocalStorage(dfjdf) {
//     return `First Item in the array is ${dfjdf[0]} `
// }

// let taskArray = getTaskFromLocalStorage()

// console.log(taskArray)

// // [Milk, Eggs, Tea, Sugar]

// Nathan
// let array = ["Milk", "Eggs", "Tea", "Sugar"]
// let cars = ["Audi", "Jeep"]
// let taskArray1 = getTaskFromLocalStorage(array)
// console.log(taskArray1)

// // [Milk, Eggs, Tea, Sugar]

function objectParam(studentObject) {
  return studentObject;
}

let student = { name: "Akeel", age: 20 };

let studentInfo = objectParam(student);

console.log(studentInfo);

function boolean(isCompleted) {
  // write an if statment to check weather isCompleted is true or false.
  // If True console.log("Task Completed") else console.log("Not Completed")
  if (isCompleted === true) {
    console.log("Task Completed");
  } else {
    console.log("not completed");
  }
}

boolean(true);

const ulEL = document.getElementById("ul-el");
const errorMsg = document.getElementById("error-msg");

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

const resetBtn = document.getElementById("reset-btn");

// function getTaskFromLocalStorage() {
//     return JSON.parse(localStorage.getItem("tasks")) || [];
// }

// let shoppingList = getTaskFromLocalStorage()

let shoppingList = JSON.parse(localStorage.getItem("shoppingList"));

function displayList() {
  ulEL.innerHTML = "";

  // loop over the shoppingList array items and assigning the ulEl innerHTMl to a "</li>" item

  for (let i = 0; i < shoppingList.length; i++) {
    ulEL.innerHTML += "<li>" + shoppingList[i] + "</li>";
  }
}

displayList();
inputBtn.addEventListener("click", function () {
  let removedWhiteSpace = inputEl.value.trim();

  if (removedWhiteSpace === "") {
    errorMsg.textContent = "Please Input a Value";
  } else {
    errorMsg.textContent = "";
    shoppingList.push(removedWhiteSpace);
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

    displayList();
    inputEl.value = "";
  }
});

resetBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  shoppingList = [];
  displayList();
});

// Declare four const variables named inputEl, inputBtn and, resetBtn, ulEL. Use
// document.getElementById() to get input box, input button(Add) , reset Button (reset) and UL elemnt  from the HTML file.

// function RANDOM(){
// // Ryan
// const inputBtnID = document.getElementById("input-btn")
// // Shital
// const ulEl =document.getElementById("ul-el");
// // Nath
// const inputEl = document.getElementById("input-el")
// // Mert
// const ResetBtn = document.getElementById("reset-btn")
// // Akee
// let shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];

// function displayList() {
//     ulEl.innerHTML = ""
//     //Ryan
//     for(let i = 0; i < shoppingList.length; i++) {
//         // NISHA + MER
//        ulEl.innerHTML += "<li>" + shoppingList[i] + "</li>"
//     }
//     console.log(typeof JSON.stringify(shoppingList))
//     console.log(typeof shoppingList)
// }

// displayList()

// // Nisha
// inputBtnID.addEventListener("click",function(){
//     //MERT + SHITAL ---BAHAR
//     let userInput = inputEl.value.trim()

//     if(userInput !== "") {
//         shoppingList.push(userInput)

//          localStorage.setItem("shoppingList", JSON.stringify(shoppingList))

//         displayList()
//         inputEl.value = ""
//     } else {
//         console.log("Please input a text")

//     }

// })

// //Ahmed
// ResetBtn.addEventListener("dblclick", function(){

// })

// function getTaskFromLocalStorage() {
//     return JSON.parse(localStorage.getItem("tasks")) || [];
// }

// let taskArray = getTaskFromLocalStorage()

// console.log(taskArray)

// let Tasks = [{text: "Code", completed: true},{text: "Coding", completed: false},{text: "Running", completed: true},{text: "Swimming", completed: false}]

// function createElement() {

//     // Ryan
// const inputBtnID = document.getElementById("input-btn")
// // Shital
// const ulEl =document.getElementById("ul-el");
// // Nath
// const inputEl = document.getElementById("input-el")
// // Mert
// const ResetBtn = document.getElementById("reset-btn")
// // Akee
// let shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];

// function displayList() {
//     ulEl.innerHTML = ""
//     //Ryan
//     for(let i = 0; i < shoppingList.length; i++) {
//         // NISHA + MER
//        ulEl.innerHTML += "<li>" + shoppingList[i] + "</li>"

//        const li = document.createElement("li") // == "<li>" "</li>"
//         li.textContent = shoppingList[i] //
//        //ulEl.append(li)
//     }
// }

// displayList()
// }
// }
*/
