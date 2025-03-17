# nodes_filesystem
//Create,Write,Delete,Update a filesystem in Node Js


In Node.js, the File System (fs) module is used to interact with the file system. It allows you to create, read, update, delete, and manipulate files and directories. The fs module comes built-in with Node.js, so you don’t need to install it separately.

1. Importing the File System Module
Before using the file system, you need to import the fs module:

const fs = require('fs');

2. Reading a File
You can read a file synchronously or asynchronously.


3.Difference Between Asynchronous and Synchronous Methods in Node.js
3.1. Synchronous (Blocking) Methods
Executes one task at a time in a sequential order.
Blocks further code execution until the current task is completed.
Uses Sync suffix in Node.js methods (e.g., fs.readFileSync(), fs.writeFileSync()).
If a task takes a long time (e.g., file reading/writing), the entire program waits.
📌 Example: Synchronous File Read (Blocking)

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'files', 'example.txt');

try {
    const data = fs.readFileSync(filePath, 'utf8'); // Blocks execution
    console.log('File content:', data);
} catch (error) {
    console.error('Error reading file:', error);
}

console.log('This message prints only after file reading is completed.');
✅ Output Order:
File content: <file contents>
This message prints only after file reading is completed.


⛔ Issue: If readFileSync() takes 5 seconds, the entire program waits for 5 seconds before moving to the next line.

3.2. Asynchronous (Non-Blocking) Methods
Executes multiple tasks at the same time.
Uses callback functions or Promises to handle results later.
Does not block execution; the program moves to the next task while waiting for completion.
Recommended for I/O operations (file system, database, network requests).
📌 Example: Asynchronous File Read (Non-Blocking)

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'files', 'example.txt');

fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
        console.error('Error reading file:', error);
        return;
    }
    console.log('File content:', data);
});

console.log('This message prints before file reading is completed.');
✅ Output Order (Non-Blocking):

This message prints before file reading is completed.
File content: <file contents>
💡 Why? fs.readFile() runs in the background while Node.js moves to the next line.



Which One Should You Use?
✅ Use Asynchronous (fs.readFile, fs.writeFile) for most cases to improve performance.
⛔ Use Synchronous (fs.readFileSync, fs.writeFileSync) only if:
You need strict execution order.
You're writing small scripts that don’t require high performance.  



🚀 Best Practice: Always use asynchronous methods unless you have a specific reason to use synchronous ones!


4.
