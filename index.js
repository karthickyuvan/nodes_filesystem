const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');
const dirPath = path.join(__dirname, 'newDirectory');

// 1. Create a new directory
fs.mkdir(dirPath, { recursive: true }, (err) => {
  if (err) {
    console.error('Error creating directory:', err);
  } else {
    console.log('Directory created successfully!');
  }
});

// 2. Write to a file
fs.writeFile(filePath, 'Hello, this is Node.js File System!', (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File written successfully!');

    // 3. Append to the file
    fs.appendFile(filePath, '\nAppending more content...', (err) => {
      if (err) {
        console.error('Error appending to file:', err);
      } else {
        console.log('Content appended successfully!');

        // 4. Read the file
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            console.error('Error reading file:', err);
          } else {
            console.log('File content:\n', data);

            // 5. Check if the file exists
            if (fs.existsSync(filePath)) {
              console.log('File exists!');

              // 6. Delete the file
              fs.unlink(filePath, (err) => {
                if (err) {
                  console.error('Error deleting file:', err);
                } else {
                  console.log('File deleted successfully!');

                  // 7. Remove the directory
                  fs.rmdir(dirPath, { recursive: true }, (err) => {
                    if (err) {
                      console.error('Error deleting directory:', err);
                    } else {
                      console.log('Directory deleted successfully!');
                    }
                  });
                }
              });
            } else {
              console.log('File does not exist!');
            }
          }
        });
      }
    });
  }
});

/*
Explanation:
Create a Directory: Uses fs.mkdir().
Write a File: Creates example.txt with initial content.
Append Data: Adds extra content to the file.
Read the File: Displays the content in the console.
Check if the File Exists: Uses fs.existsSync().
Delete the File: Uses fs.unlink().
Delete the Directory: Uses fs.rmdir().*/
