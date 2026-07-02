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



