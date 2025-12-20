//Modules
//1. Built-in Modules
const fs = require('fs');
console.log(fs);
//inside browser if we console.log(fs) it will give error because fs is not defined
//but in Node Js it will give the object of fs module which is file system module
//require('fs') is used to import the fs module
//require('./fs') is used to import custom module

const content = fs.readFileSync('./JSFoundation/NodeJs/notes.txt', 'utf-8');
console.log(content);

//wrapper function
// (function (exports, require, module, __filename, __dirname) {
//     //Module code actually lives in here
// });

//2. 3rd Party Modules(Extrenal Modules) - npm install <module_name>
//lodash module
const _ = require('lodash');    
const numbers = [1, 2, 3, 4, 5, 6];
const shuffledNumbers = _.shuffle(numbers);
console.log(shuffledNumbers);

// 3. Custom Modules
const myModule = require('./myModule');
myModule.greet('Alice');
const sum = myModule.add(5, 10);
console.log(`Sum: ${sum}`);
//In the above code we have created a custom module named myModule.js and imported it here using require('./myModule')

//Note: In Node.js, each file is treated as a separate module. The variables and functions defined in one module are not accessible in another module unless they are explicitly exported and imported using require().