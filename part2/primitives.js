//types primitive and non-primitive
//primitive types: string, number, boolean, null, undefined, symbol, bigint

//non-primitive types: object, array, function
//primitive types are immutable, non-primitive types are mutable
let str1 = "Hello";
let str2 = str1; //copy by value        
str2 = "World";
console.log(str1); //Hello
console.log(str2); //World  
//non-primitive types are copied by reference
let obj1 = { name: "Alice" };
let obj2 = obj1; //copy by reference
obj2.name = "Bob";
console.log(obj1.name); //Bob
console.log(obj2.name); //Bob
//to clone non-primitive types, we can use Object.assign() or spread operator
let obj3 = { name: "Charlie" };
let obj4 = Object.assign({}, obj3);
obj4.name = "David";
console.log(obj3.name); //Charlie
console.log(obj4.name); //David
let obj5 = { name: "Eve" };
let obj6 = { ...obj5 };
obj6.name = "Frank";
console.log(obj5.name); //Eve
console.log(obj6.name); //Frank 
//arrays are also non-primitive types
let arr1 = [1, 2, 3];
let arr2 = arr1; //copy by reference
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
//to clone arrays, we can use slice() or spread operator
let arr3 = [5, 6, 7];   
let arr4 = arr3.slice();
arr4.push(8);
console.log(arr3); // [5, 6, 7]
console.log(arr4); // [5, 6, 7, 8]      
let arr5 = [9, 10, 11];
let arr6 = [...arr5];
arr6.push(12);
console.log(arr5); // [9, 10, 11]
console.log(arr6); // [9, 10, 11, 12]       
//functions are also non-primitive types
function func1() {
    return "Hello";
}       
let func2 = func1; //copy by reference
console.log(func2()); //Hello   
//to clone functions, we can use bind()
let func3 = func1.bind({});
console.log(func3()); //Hello   
//summary: primitive types are copied by value and are immutable, 
// non-primitive types are copied by reference and are mutable. 
// To clone non-primitive types, 
// we can use Object.assign(), spread operator, slice(), or bind() depending on the type.

//'$' use case in in printing variables
let name = "John";
let age = 30;
console.log(`My name is ${name} and I am ${age} years old.`); //My name is John and I am 30 years old.  
//using '$' in template literals allows embedding expressions and variables directly within strings.

let mult = "Multiplication of 2 and 3 is " + `${2 * 3}`;
console.log(mult); //Multiplication of 2 and 3 is 6

