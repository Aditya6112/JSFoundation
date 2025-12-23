const fs = require('node:fs');

//sync => Blocking
const content = fs.readFileSync('notes.txt', 'utf-8');
console.log('Synchronous read:', content);

//async => Non-blocking
fs.readFile('notes.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Asynchronous read:', data);
});
console.log('Synchronous read:', content);