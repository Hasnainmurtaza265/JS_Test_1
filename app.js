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


