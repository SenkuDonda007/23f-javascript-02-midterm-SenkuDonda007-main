// Question 1 - The html is not attached to the script file, add the script info in header of html - 1 mark

// Question 2 - Declare and initialize a variable called, "myTest1" – you can set it to either a string, a number, or a boolean value. - 2 marks

// Question 3 - Create a variable to hold your student number and store it in studentNum

// Create a variable to get the paragraph from question 3 html and store it in question3Text

// Output your student number stored in studentNum to question3Text p tag - 3 marks

// Question 4 - Create 2 variables to get the button and paragraph from question 4 html and store it in question4Button & question4Text - 2 marks

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

// write a simple event listener that calls the function toggleLight when the button is clicked. - 4 marks

// Question 5 - Consider the following code:
var question5a = 1;
var question5b = 'I am writing Test1';

// Write a piece of code that changes the value of question5a to a string, then concatenates it to the value of question5b. 
// Assign the resulting string to a new variable called question5c. - 3 marks

// Question 6 - Examine the variable and its string value as shown in the following code:
var question6 = "I will finish the test in 2 hours.";

/* 
Write a short block of code that does the following things:
1. Remove the phrase, "in 2 hours."
2. Append the phrase, "SOON!"
3. Replace the phrase, "finish" with "conclude"
4. Output the resulting string to the browser console
- 4 marks */

// Question 7 - Using the following array, build a simple loop that joins together each array item to create the string, "One, two, three, four, I declare thumb war!" 
// and assign the string to a variable called question7Answer. - 4 marks
var question7 = ['one', 'two', 'three', 'four', 'I', 'declare', 'thumb', 'war'];

// Question 8 - Have a look at the array below. Write a short piece of JavaScript that removes the array item "pink" from the end of the array, 
// and adds a new array item, "red" to the beginning. - 2 marks
var question8 = ['orange', 'yellow', 'green', 'blue', 'violet', 'pink'];

// Question 9 - Considering that the following variables have already been declared:
var timeOfDay;
var meal;

// build a simple switch statement that sets the value of the variable meal to be either 'breakfast', 'lunch', or 'dinner' – 
// depending on the value of timeOfDay(can be either 'morning', 'afternoon', or 'evening'). Include a default that sets meal to the value, 'no meal'. - 5 marks

// Question 10 - Create a simple while loop that iterates through the elements of an array called ingredients, and logs each array item out to the console. - 4 points

// Question 11 - Create a variable to get the paragraph from question 11 html and store it in question11Para - 1 mark

// Write your name in 'Your Name Here'
question11Para.textContent = greeting('Your Name Here');

// Write the function called greeting, that accepts a single parameter(name), and returns a string that reads, "Hello, [name]. How are you today?" - 2 marks

// Question 12 - Dynamically create an image tag and add it inside question 12 Div. You can use the image from img folder. - 5 marks

// Question 13 - Consider the following code:
const question13Btn = document.querySelector('#question13');

function question13Fun() {
    // console.log();
}
question13Btn.addEventListener('click', question13Fun);

// Modify the above function such that it gives this precise output "<button id="question13">Go!</button>" on console - 5 marks
// Tip: You might have to pass some parameter to the function.

// Question 14 - Considering the below multidimensional array, console log on how would you refer to or obtain the number 3? - 1 mark
let question14 = ["flower", 25, [2, 3, 6], true];

// Question 15 - Observe the below code:
const question15BtnA = document.querySelector('#question15a');
const question15BtnB = document.querySelector('#question15b');

function question15Fun() {
    window.setInterval(sub, 1000);

    function sub() {
        console.log("I am infinite!");
    }
}

question15BtnA.addEventListener("click", question15Fun);

// Create an event listener on question15BtnB with an anonymous function, such that when user clicks question15BtnB button, it disables the above listener - 5 marks


// Question 16 - Observe the following array
var employeeArray = ["200465123: Francoise Rautenstrauch", "200465124: Kendra Loud", "200465125: Lourdes Bauswell", "200465126: Hannah Edmison", "200465127: Tom Loeza"];

// create a utility that shows the values from the above array in proper table (inside of tfoot) - check html
// To see how it looks like, check the img folder
/* your steps might include - creating a loop to iterate through the array, breaking apart the name and id from array for each item,
                                capturing each values in a variable, creating dynamic tr and td tags and appending to the tfoot    - 4 marks
*/

// Question 17 - Create an external css file, store in folder and connect with html - 3 marks
// It's fine if the file has just one style in it...