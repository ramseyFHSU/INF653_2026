const fsPromises = require('fs/promises'); // Import the promise-based file system module.
const path = require('path'); // Import the path module for cross-platform path handling.

// Define an asynchronous function to read a file.
async function readFileAsync() {
  try {
    // Construct the absolute file path using path.join and __dirname.
    const filePath = path.join(__dirname, "files", 'renamedfile.txt');

    // Asynchronously read the file content with UTF-8 encoding using fsPromises.readFile.
    // 'await' pauses the function execution until the promise resolves.
    const data = await fsPromises.readFile(filePath, 'utf8');

    // Log the file content to the console.
    console.log('Async File Content:', data);
  } catch (err) {
    // Handle any errors that occur during file reading.
    console.error('Error reading file:', err);
  }
}

// Execute the readFileAsync function.
readFileAsync();

// Define an asynchronous function to write to a file.
async function writeFileAsync() {
  try {
    // Construct the absolute file path using path.join and __dirname.
    const filePath = path.join(__dirname, "files", 'asyncfile.txt');

    // Asynchronously write data to the file using fsPromises.writeFile.
    // 'await' pauses the function execution until the promise resolves.
    await fsPromises.writeFile(filePath, "This is an async file");

    // Log a success message to the console.
    console.log("async file write complete");
  } catch (err) {
    // Handle any errors that occur during file writing.
    console.error("error writing async file", err);
  }
}

// Execute the writeFileAsync function.
writeFileAsync();