const fs = require('fs');

function writeFile(filename, data) {
  fs.writeFileSync(filename, data);
  console.log("Data written successfully!");
}

function readFile(filename) {
  const content = fs.readFileSync(filename, 'utf-8');
  console.log("File Content:", content);
}

function appendFile(filename, data) {
  fs.appendFileSync(filename, data);
  console.log("Data appended successfully!");
}

module.exports = { writeFile, readFile, appendFile };
