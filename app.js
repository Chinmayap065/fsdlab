const fileOps = require('./fileOperations');

// Writing to file
fileOps.writeFile('sample.txt', 'Hello, Node.js!\n');

// Reading from file
fileOps.readFile('sample.txt');

// Appending data to file
fileOps.appendFile('sample.txt', 'Appended text.\n');

// Reading again to show update
fileOps.readFile('sample.txt');
