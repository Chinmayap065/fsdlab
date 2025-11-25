const fs = require('fs');
const readline = require('readline');

// Create interface for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for input
rl.question("Enter something to store in file: ", function(input) {
  // Write input to file
  fs.writeFile("hi.txt", input, (err) => {
    if (err) {
      console.log("Error writing to file");
    } else {
      console.log("Data saved successfully to output.txt");
    }
    rl.close();
  });
});
