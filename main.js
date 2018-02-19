
var events=require('events');

var eventEmitter=new events.EventEmitter();
var listner1 =function listner1()
{

	console.log('listner1 is executed');
}
var listner2=function listner2()
{

	console.log('listner2 is excuted');
}
eventEmitter.addListener('connection',listner1);
eventEmitter.on('connection',listner2);
var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+"listener emitting the connection");
eventEmitter.emit('connection');
eventEmitter.removeListener('connection',listner1);
console.log('listner1 is not is list know');
eventEmitter.emit('connection');
 eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+"listener emitting the connection");
console.log('program iss ended');