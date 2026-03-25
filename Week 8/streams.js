const fs = require('fs'); // Import the built-in 'fs' (file system) module for file operations.

// Reading a file stream

// Create a readable stream from 'renamedfile.txt' with UTF-8 encoding.
const readStream = fs.createReadStream('renamedfile.txt', 'utf8'); 
// This allows reading the file in chunks, not all at once.

// Writing to a file stream

// Create a writable stream to 'output.txt'.
const writeStream = fs.createWriteStream('output.txt'); 
// This allows writing data in chunks.

// Piping the read stream to the write stream

// Connect the readable stream to the writable stream.
readStream.pipe(writeStream); 
// This efficiently copies data from 'renamedfile.txt' to 'output.txt' in chunks.
// The 'pipe' method handles the data flow automatically.

// Print a message to the console indicating that the stream processing has started.
console.log('Stream processing started.'); 
// This message will be printed *before* the file copy is complete,
// Connect the readable stream to the writable stream as streams are asynchronous.