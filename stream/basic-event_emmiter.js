const EventEmitter=require('events');

//create instance of event emitter

const eventemitter=new EventEmitter();
//define a event listner 
eventemitter.on('fire',()=>{
    console.log('fire event has been fired');
});
// fire a event
eventemitter.emit('fire'); 