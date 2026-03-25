const path = require('path');

const filePath = '/users/myuser/documents/myfile.txt';

// path.dirname(filePath) extracts the directory name from the filePath.
console.log('Directory Name:', path.dirname(filePath));

// path.basename(filePath) extracts the base name (the file name) from the filePath.
console.log('Base Name:', path.basename(filePath));

// path.extname(filePath) extracts the file extension from the filePath.
console.log('Extension Name:', path.extname(filePath));

// path.parse(filePath) parses the filePath and returns an object containing 
// its components (root, dir, base, ext, name).
console.log('Parsed Path:', path.parse(filePath));

// path.join() joins multiple path segments into a single path
// using the appropriate separator for the operating system.
const newPath = path.join('/users', 'myuser', 'downloads', 'image.jpg');
console.log('Joined Path:', newPath);

// path.resolve() resolves a sequence of paths or path segments into an absolute path.
const absolutePath = path.resolve('relative/path/file.txt');
console.log('Absolute Path:', absolutePath);