//let và const đều dùng để khai báo biến: let thì khai biến có thể thay đổi giá trị của nó còn const thì khai báo hằng số không thể thay đổi được
//Exercise 1: Calculate Average Score
// Declare scores for 3 subjects
const mathScore = 8;
const physicsScore = 7;
const chemistryScore = 9;
// Calculate average score
let averageScore = (mathScore + physicsScore + chemistryScore) / 3;
// Print result
console.log("Average score:", averageScore);

//Exercise 2: Calculate Rectangle Perimeter and Area
// Declare width and height
let width = 5;
let height1 = 3;
// Calculate perimeter
let perimeter = (width + height1) * 2;
// Calculate area
let area = width * height1;
// Print results
console.log("Perimeter:", perimeter);
console.log("Area:", area);

//Exercise 3: Convert Celsius to Fahrenheit
// Temperature in Celsius
let celsius = 30;
// Convert to Fahrenheit
let fahrenheit = celsius * 1.8 + 32;
// Print result
console.log(celsius + "°C = " + fahrenheit + "°F");

//Exercise 4: Calculate Tip Amount
// Bill amount
let billAmount = 200000;
// Tip percentage
let tipPercent = 10;
// Calculate tip amount
let tipAmount = (billAmount * tipPercent) / 100;
// Calculate total amount
let totalAmount = tipAmount + billAmount;
// Print results
console.log("Bill amount:", billAmount);
console.log("Tip amount:", tipAmount);
console.log("Total amount:", totalAmount);

//Exercise 5: Check Even or Odd Number
// Number to check
let number = 7;
// Check if divisible by 2
let isEven = number % 2 == 0;
// Print result
console.log("Number " + number + " is " + (isEven ? "even" : "odd"));