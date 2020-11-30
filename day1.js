//Task 1
//Write a JavaScript program to calculate the days left until the next Christmas.

var xmasDay = new Date("25 December 2020");
var currentDay = new Date();
var differenceInTime = xmasDay.getTime() - currentDay.getTime();
var differenceInDays = differenceInTime / (1000 * 3600 * 24);
console.log(differenceInDays);

//Task 2
//Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

var num1 = Number(prompt());
var num2 = Number(prompt());
console.log(num1 == 50 || num2 == 50 || num1+num2 == 50 ? true : false);

//Task 3
//Write a javascript program to check the length of the string.

var string = "Hello World!";
var noOfWords = string.length;
console.log(noOfWords);
