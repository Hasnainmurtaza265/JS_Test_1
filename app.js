// Question 1: Variable Declarations and Initialization
// Create three variables: productName (string with value "Laptop"), 
// price (number with value 999.99), and 
// inStock (boolean with value true). 
// Console.log all three variables in a single statement.
let productName = "Laptop";
let price = 999.99;
let inStock = true;
console.log(productName, price, inStock);






// Question 2: Mathematical Operations
// Calculate and display:

// The remainder when 27 is divided by 4
// The square of 12 (using exponentiation operator **)
// The result of incrementing 8 by 1 using the ++ operator
// The result of decrementing 15 by 2 using the -= operator
console.log(27 % 4);

console.log(12 ** 2);

let a = 8;
a++;
console.log(a);

let b = 15;
b -= 2;
console.log(b);






// Question 3: String Concatenation and Case Conversion
// Create two string variables: firstName = "alex" and 
// lastName = "SMITH". Concatenate them with a space, 
// then convert the result to proper case (first letter uppercase, rest lowercase).
// Also find the total length of the full name.

let firstName = "alex";
let first = firstName.charAt(0);
first = first.toUpperCase();
let name = firstName.slice(1)
firstName = first + name;
// Last Name
let lastName = "SMITH";
let last = lastName.charAt(0);
let halfName = lastName.slice(1);
halfName = halfName.toLowerCase();
lastName = last + halfName
// Concatenate
let fullName = firstName + " " + lastName;

console.log(fullName);
console.log(fullName.length);




// Question 4: if-else Conditional Logic
// Write an if-else statement that checks a temperature variable. 
// If temperature is above 30, console.log "Hot day". 
// If between 20 and 30 (inclusive), console.log "Pleasant day".
// Otherwise, console.log "Cold day". Test with temperature = 25.

let temperature = 25;
if (temperature > 30) {
    console.log("Hot day");

} else if (temperature >= 20 && temperature <= 30) {
    console.log("Pleasant day");
} else {
    console.log("Cold day");

}




// Question 5: Comparison Operators
// Create three comparison operations:

// Check if 15 is strictly equal to "15"
// Check if 20 is greater than 15 AND less than 25
// Check if 10 is not equal to 10 OR 5 is greater than 3

console.log(15 === "15");
console.log(20 > 15 && 20 < 25);
console.log(10 !== 10 || 5 > 3);





// Question 6: Array Manipulation - Basics
// Create an array colors with values ["red", "green", "blue"]. Then:
// Add "yellow" to the end
// Remove the first element
// Insert "purple" at index 1
// Console.log the final array and its length 

let colors = ["red", "green", "blue"];
colors.push("yellow");
colors.shift();
colors.splice(1, 0, "purple");
console.log(colors, colors.length);










// Question 7: Array Manipulation - splice()
// Start with array fruits = ["apple", "banana", "cherry", "date", "elderberry"]. Use splice() to:
// Remove "cherry"
// Replace "date" with "dragonfruit"
// Extract the middle 3 elements into a new array

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.splice(2, 1);
fruits.splice(2, 1, "dragonfruit");
console.log(fruits);







// Question 8: for Loop - Number Sequence
// Write a for loop that prints numbers from 1 to 10, 
// but skips number 5 using continue, and stops at 8 using break.
// Also calculate the sum of all printed numbers.
let sum = 0;
for (i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }

    if (i >= 8) {
        break;
    }
    console.log(i);
    sum += i;


}

console.log(sum);






// Question 9: Nested for Loop - Pattern
// Write nested for loops to create this pattern:

// *
// **
// ***
// ****
// *****


for (i = 1; i <= 5; i++) {
    let pattern = "";

    for (j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);

}






// Question 10: String Methods - Search and Extract
// Given text = "The quick brown fox jumps over the lazy dog":
// Find the position of "fox"
// Extract "brown fox" using substring/slice
// Check if the text contains "dog"
// Get the character at position 10

let text = "The quick brown fox jumps over the lazy dog";
console.log(text.indexOf("fox"));

let extract = text.substring(10, 19);
console.log(extract);

let search = text.includes("dog");
console.log(search);

let index = text.charAt(10);
console.log(index);









// Question 11: String Replacement
// Given sentence = "I love JavaScript and JavaScript is awesome":
// Replace the first "JavaScript" with "coding"
// Replace ALL "JavaScript" with "JS"
// Replace "awesome" with uppercase "AWESOME"

let sentence = "I love JavaScript and JavaScript is awesome";
let code = sentence.replace("JavaScript", "coding");
console.log(code);

let js = sentence.replaceAll("JavaScript", "JS");
console.log(js);

let awesome = sentence.replace("awesome", "AWESOME");
console.log(awesome);

















// Question 12: Number Rounding and Formatting
// Given num = 123.456789:
// Round to 2 decimal places
// Round to nearest integer
// Get the floor value
// Get the ceiling value
// Format to show exactly 4 decimal places

let num = 123.456789;
let round_2 = num.toFixed(2);
console.log(round_2);


let nearest = Math.round(num);
console.log(nearest);


let floor = Math.floor(num);
console.log(floor);

let ceil = Math.ceil(num);
console.log(ceil);

let format = num.toFixed(4);
console.log(format);



// Question 13: Random Number Generation
// Generate:
// A random integer between 1 and 100 (inclusive)
// A random decimal between 0 and 1 with 3 decimal places
// A random number between 50 and 75 (inclusive)


let random = Math.floor(Math.random() * 100 + 1);
console.log(random);


let decimal = Math.random().toFixed(3)
console.log(decimal);

let number = Math.floor(Math.random() * (75 - 50 + 1)) + 50;
console.log(number);








// Question 14: Type Conversion
// Perform these conversions:
// Convert string "123" to number
// Convert string "45.67" to decimal (float)
// Convert number 789 to string
// Check the type of "true" after converting to boolean


let num_1 = "123";
num_1 = +num_1;
console.log(num_1);

let decimal_float = "45.67";
decimal_float = parseFloat(decimal_float);
console.log(decimal_float);

let num_string = 789;
num_string = num_string.toString();
console.log(num_string);

let value_3 = "true";
value_3 = Boolean(value_3);
console.log(typeof (value_3));






// Question 15: Date and Time Operations
// Create a Date object for the current time and:

// Extract the year, month (0-11), and day
// Get the hours in 24-hour format
// Format it as "YYYY-MM-DD"
// Create a specific date for December 25, 2024

let today = new Date();
let crnt_year = today.getFullYear();
console.log(crnt_year);
let crnt_month = today.getMonth();
console.log(crnt_month);
let crnt_date = today.getDate();
console.log(crnt_date);


let crnt_hours = today.getHours();
console.log(crnt_hours);


let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let final_date = year + "-" + month + "-" + date;
console.log(final_date);


let christmas = new Date(2024, 11, 25);
console.log(christmas);








// Question 16: Function - Basic Calculator
// Write a function calculate that takes two numbers and 
// an operator (+, -, *, /) as parameters and returns the result. 
// Handle division by zero by returning "Error: Division by zero".


let calculate=(num_1,num_2,operator)=>{
if(operator==="+"){
return num_1+num_2;
}




}








