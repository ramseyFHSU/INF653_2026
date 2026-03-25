const fs = require("fs"); // Import the built-in 'fs' (file system) module, allowing interaction with files.
const path = require("path");

// Reading a file
fs.readFile("./files/file1.txt", "utf8", (err, data) => {
  // Asynchronously reads the entire contents of 'text.txt'.
  if (err) throw err;
  console.log("File Content:", data);
}); // 'utf8' specifies the character encoding. The callback function handles the result.

// Writing to a file using path.join
const filePath = path.join(__dirname, "files", "file2.txt"); // Construct the file path using path.join
console.log(filePath);
fs.writeFile(filePath, "Hello, this is a test to write file!", (err) => {
  // Asynchronously writes to the constructed file path.
  if (err) throw err;
  console.log("File written successfully.");
}); // Overwrites the file if it exists, creates it if it doesn't.

// // Appending to a file
fs.appendFile(filePath, "\nThis is appended data.", (err) => {
  // Asynchronously appends data to 'newfile.txt'.
  if (err) throw err;
  console.log("Data appended successfully.");
}); // Adds the provided string to the end of the file. '\n' starts a new line.

// // Renaming a file
fs.rename("./files/test.txt", "renamedfile.txt", (err) => {
  // Asynchronously renames 'newfile.txt' to 'renamedfile.txt'.
  if (err) throw err;
  console.log("File renamed successfully.");
}); // Changes the file's name.

/* Character encoding is a system that maps characters (letters, numbers, symbols, etc.) 
to numerical values, allowing computers to store and process text. 
Essentially, it's how computers translate the characters we see into the binary data they understand. */
