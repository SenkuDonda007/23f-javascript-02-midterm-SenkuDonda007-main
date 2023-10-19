// Question 1
// Add the script info in header of html
<script src="script.js"></script>

// Question 2
// Declare and initialize a variable called, "myTest1"
let myTest1 = true;

// Question 3
// Create a variable to hold your student number and store it in studentNum
let studentNum = "200520505";
// Create a variable to get the paragraph from question 3 html and store it in question3Text
let question3Text = document.querySelector("#myStudentId");
// Output your student number stored in studentNum to question3Text p tag
question3Text.textContent = studentNum;

// Question 4
// Create 2 variables to get the button and paragraph from question 4 html and store it in question4Button & question4Text
let question4Button = document.querySelector(".question4Button");
let question4Text = document.querySelector(".question4Para");

// Observe the following function
function toggleLight() {
    if (question4Button.textContent === 'turn on') {
        question4Button.textContent = 'turn off';
        question4Text.textContent = 'The light is on.';
    } else {
        question4Button.textContent = 'turn on';
        question4Text.textContent = 'The light is off.';
    }
}

// write a simple event listener that calls the function toggleLight when the button is clicked.
question4Button.addEventListener("click", toggleLight);

// Question 5
// Concatenate question5a and question5b and store it in question5c
let question5a = 2;
let question5b = "I am writing Test1";
let question5c = question5a.toString() + question5b;

// Question 6
// Remove the phrase, "in 2 hours." and append the phrase, "SOON!" and replace the phrase, "finish" with "conclude"
let question6 = "I will finish the test in 2 hours.";
question6 = question6.replace("in 2 hours.", "");
question6 = question6.replace("finish", "conclude");
question6 += " SOON!";
console.log(question6);

// Question 7
// Join the array items to create the string, "One, two, three, four, I declare thumb war!"
let question7 = ['one', 'two', 'three', 'four', 'I', 'declare', 'thumb', 'war'];
let question7Answer = question7.join(", ") + "!";
console.log(question7Answer);

// Question 8
// Remove the array item "pink" from the end of the array, and adds a new array item, "red" to the beginning
let question8 = ['orange', 'yellow', 'green', 'blue', 'violet', 'pink'];
question8.pop();
question8.unshift("red");

// Question 9
// Set the value of the variable meal to be either 'breakfast', 'lunch', or 'dinner' – depending on the value of timeOfDay
let timeOfDay = "morning";
let meal;
switch (timeOfDay) {
    case "morning":
        meal = "breakfast";
        break;
    case "afternoon":
        meal = "lunch";
        break;
    case "evening":
        meal = "dinner";
        break;
    default:
        meal = "no meal";
}

// Question 10
// Iterate through the elements of an array called ingredients, and logs each array item out to the console
let ingredients = ["flour", "sugar", "eggs", "milk"];
let i = 0;
while (i < ingredients.length) {
    console.log(ingredients[i]);
    i++;
}

// Question 11
// Get the paragraph from question 11 html and store it in question11Para
let question11Para = document.querySelector(".question11Para");

// Write the function called greeting, that accepts a single parameter(name), and returns a string that reads, "Hello, [name]. How are you today?"
function greeting(name) {
    return "Hello, " + name + ". How are you today?";
}

// Write your name in 'Your Name Here'
question11Para.textContent = greeting('John Doe');

// Question 12
// Dynamically create an image tag and add it inside question 12 Div
let question12Div = document.querySelector("#question12");
let img = document.createElement("img");
img.src = "img/image.jpg";
question12Div.appendChild(img);

// Question 13
// Modify the function such that it gives this precise output "<button id="question13">Go!</button>" on console
const question13Btn = document.querySelector('#question13');

function question13Fun() {
    console.log(question13Btn.outerHTML);
}

question13Btn.addEventListener('click', question13Fun);

// Question 14
// Refer to the number 3 in the array
let question14 = ["flower", 25, [2, 3, 6], true];
console.log(question14[2][1]);

// Question 15
// Create an event listener on question15BtnB with an anonymous function, such that when user clicks question15BtnB button, it disables the above listener
const question15BtnA = document.querySelector('#question15a');
const question15BtnB = document.querySelector('#question15b');

function question15Fun() {
    window.setInterval(sub, 1000);

    function sub() {
        console.log("I am infinite!");
    }
}

question15BtnA.addEventListener("click", question15Fun);

question15BtnB.addEventListener("click", function() {
    question15BtnA.removeEventListener("click", question15Fun);
}); 

// Question 16
// Show the values from the above array in proper table (inside of tfoot)
let employeeArray = ["200465123: Francoise Rautenstrauch", "200465124: Kendra Loud", "200465125: Lourdes Bauswell", "200465126: Hannah Edmison", "200465127: Tom Loeza"];
let tableBody = document.querySelector("tbody");
for (let i = 0; i < employeeArray.length; i++) {
    let employee = employeeArray[i].split(": ");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.textContent = employee[1];
    td2.textContent = employee[0];
    tr.appendChild(td1);
    tr.appendChild(td2);
    tableBody.appendChild(tr);
}

// Question 17
// Create an external css file, store in folder and connect with html
<link rel="stylesheet" href="style.css">