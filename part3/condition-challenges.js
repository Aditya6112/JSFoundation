//Checking if a number is greater then another  number:
let num1 = 10;
let num2 = 20;
console.log("******************I am regular upper code");
if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else {
    console.log(`${num1} is not greater than ${num2}`);
}
//Output: 10 is not greater than 20
console.log("******************I am regular bottom code");

//Checking if a string is equal to another string:
let str1 = "Hello";
let str2 = "World";
console.log("******************I am regular upper code"); 
if (str1 == str2) {
    console.log(`"${str1}" is equal to "${str2}"`);
} else {
    console.log(`"${str1}" is not equal to "${str2}"`);
}
//Output: "Hello" is not equal to "World"
console.log("******************I am regular bottom code");

console.log("******************I am regular upper code");
let score = "44";
if(typeof score === "number"){
    console.log("Your score is a number");
} else {
    console.log("Your score is not a number");
}
console.log("******************I am regular bottom code");
//Output: Your score is not a number

//checking if a boolean value is true or false
console.log("******************I am regular upper code");
let isActive = false;
if(isActive){
    console.log("The value is true");
} else {
    console.log("The value is false");
}
console.log("******************I am regular bottom code");

//Checking if an array is empty or not
console.log("******************I am regular upper code");
let arr = [];
if(arr.length === 0){
    console.log("The array is empty");
} else {
    console.log("The array is not empty");
}
console.log("******************I am regular bottom code");