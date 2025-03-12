// 1. Difference(s) between == and ===?
console.log("'==': This operator tests for equality of values but allows type casting. This means that if the values being compared are of different types, JavaScript will attempt to convert them to a common type before performing the comparison.");
console.log("'===': This operator checks both value and type without allowing type casting. If the values being compared are of different types, the comparison returns false.")
// 2. Use variables and operators to
// 2.1: Calculate BMI (Body Mass Index)
let height = 1.75;
let weight = 65;
let bmi = weight / (height * height);
console.log("BMI: " + bmi)
// 2.2: Calculate Simple Interest (principal * rate * time)
let principal = 10000;
let rate = 0.05;
let time = 2;
let interest = principal * rate * time;
console.log("Interest = " + interest);
// 2.3: Convert Currency (USD to local currency)
let exchangeRate = 25000; 
let amountInUSD = 100; 
let amountInVND = amountInUSD * exchangeRate;
console.log(`${amountInUSD} USD = ${amountInVND} VND`);
// 2.4: Calculate Time (hours:minutes:seconds)
let now = new Date();
let hours = now.getHours().toString().padStart(2, '0');
let minutes = now.getMinutes().toString().padStart(2, '0');
let seconds =  now.getSeconds().toString().padStart(2, '0');
let time1 = `${hours}:${minutes}:${seconds}`;
console.log("Time1: ", now);
