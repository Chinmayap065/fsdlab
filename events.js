const EventEmitter=require('events');
const eventEmitter=new EventEmitter();
function greet(sname){
    console.log(`Name:${sname}`);
}
eventEmitter.on('greetName',greet);
eventEmitter.emit('greetName','Alice');
eventEmitter.off('greetName',greet);
eventEmitter.emit('greetName','Bob');
