// Assignment

// // 1. Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)

let number1 = 10;
let number2 = 20;
if (number1 > number2) {
  console.log("Maximum");
}

// 2. Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take a single variable and check using if else condition)

let number1 = -20;
if (number1 > 0) {
  console.log("Positive number");
} else if (number1 < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}

// 3. Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

let number = 27;
if (number % 10 == 0) {
  console.log("number is divisible by 10");
} else {
  console.log("number is not divisible by 10");
}

// 4. Solve the problem with Javascript  to check whether a number is even or odd.

let number = 19;

if (number % 2 == 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

// 5. Solve the problem with Javascript  to check whether a character is in the alphabet or not.

function isCharacterALetter(char) {
  return /[a-zA-Z]/.test(char);
}
console.log(isCharacterALetter("A"));
console.log(isCharacterALetter("2"));

// 6. // Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)

let temperature = 40;
if (temperature >= 30) {
  console.log("Hot");
} else if (temperature <= 25) {
  console.log("Cold");
} else {
  console.log("Normal");
}

// 7. Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

let number1 = 45;
let number2 = 50;
let number3 = 59;

if (number1 >= number2 && number1 >= number3) {
  console.log("number1");
} else if (number2 >= number1 && number2 >= number3) {
  console.log("number2");
} else {
  console.log("number3");
}

// 8. Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.

let number = 4;

if (number % 2 == 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

// 9. Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.

let numOne = 29;
let numTwo = 30;

if (numOne && numTwo > 30) {
  console.log("Yes");
} else {
  console.log("No");
}

// 10. Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)

let personAge = 19;

if (personAge >= 13 && personAge <= 19) {
  console.log("Teenager");
} else {
  console.log("Not Teenager");
}
