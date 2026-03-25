const fs = require('fs'); // Import the built-in 'fs' (file system) module for file and directory operations.

// Creating a directory
fs.mkdir('newdir', (err) => { // Asynchronously creates a directory named 'newdir'.
  if (err) throw err;   
  console.log('Directory created.');   
}); // The callback function handles the result of the asynchronous operation.

// Removing a directory
fs.rmdir('newdir', (err) => { // Asynchronously removes the directory named 'newdir'.
  if (err) throw err; 
  console.log('Directory removed.'); 
}); // The callback function handles the result of the asynchronous operation.

// Checking if a directory or file exists.
if (fs.existsSync('output.txt')) { // Synchronously checks if a file or directory named 'output.txt' exists.
  console.log("output file exists"); // If 'output.txt' exists, print a message to the console.
} // fs.existsSync() returns true if the path exists, false otherwise.