const fs = require('node:fs');

const content = fs.readFileSync('notes.txt', 'utf-8');

console.log(content);

fs.writeFileSync('copy.txt', content, 'utf-8');
console.log('File copied successfully.');

fs.appendFileSync('notes.txt', '\nAppended line.', 'utf-8');
console.log('Line appended successfully.');

fs.mkdirSync('games/xyz/abc', { recursive: true });
console.log('Directory created successfully.');

fs.rmdirSync('games', { recursive: true });
console.log('Directory removed successfully.');

fs.unlinkSync('copy.txt');
console.log('File deleted successfully.');