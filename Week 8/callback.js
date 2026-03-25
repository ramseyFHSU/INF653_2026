const fs = require('fs');
const path = require('path');

const file1Path = path.join(__dirname, "files", 'file1.txt');
const file2Path = path.join(__dirname, "files", 'file2.txt');
const combinedPath = path.join(__dirname,"files", 'combined.txt');
const finalPath = path.join(__dirname, "files", 'final.txt');

fs.readFile(file1Path, 'utf8', (err1, data1) => {
  if (err1) {
    console.error('Error reading file1:', err1);
    return;
  }
  console.log('file1.txt content:', data1);

  fs.readFile(file2Path, 'utf8', (err2, data2) => {
    if (err2) {
      console.error('Error reading file2:', err2);
      return;
    }
    console.log('file2.txt content:', data2);

    fs.writeFile(combinedPath, data1 + data2, (err3) => {
      if (err3) {
        console.error('Error writing combined.txt:', err3);
        return;
      }
      console.log('combined.txt written successfully.');

      fs.rename(combinedPath, finalPath, (err4) => {
        if (err4) {
          console.error('Error renaming file:', err4);
          return;
        }
        console.log('file renamed succesfully');

        fs.appendFile(finalPath, 'Appended Data', (err5) => {
          if (err5) {
            console.log('Error appending data', err5);
            return;
          }
          console.log('data appended');
        });
      });
    });
  });
});

console.log('This line executes before the file operations complete.');