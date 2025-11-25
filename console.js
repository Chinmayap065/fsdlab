console.time('start'); // Start the timer


console.group('Grouping example');
console.log('Msg1');
console.log('Msg2');
console.groupEnd();

const x = 5;
console.assert(x > 10, "x is not greater than 10");

const users = [
    { Name: 'Alice', age: 20 },
    { Name: 'Bob', age: 21 },
    { Name: 'Charlie', age: 22 }
];

console.table(users);

const debugInfo = 'Debugging';
console.debug('Debug info details:', debugInfo);

console.timeEnd('start'); // End and display the timer
