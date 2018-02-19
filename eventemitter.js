 var events= require('events'); 
 var eventtEmitter = new events.EventEmitter();

var connectHandler=function connected(){


	console.log('connection successfully...');
	eventtEmitter.emit('data_recevied');
}
eventtEmitter.on('connection',connectHandler);

eventtEmitter.on('data_recevied',function(){

	console.log('data received success');
});
eventtEmitter.emit('connection');
console.log('program ended');




















