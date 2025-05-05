const EventEmitter=require('events');
const eventEmitter=new EventEmitter();
eventEmitter.on('fire',(address)=>{
    console.log('fire event has been fired',address);
});
eventEmitter.on('crime',(address)=>{
    console.log('call polish department ',address);
});
eventEmitter.emit('fire','in bangalore hsr layout');
eventEmitter.emit('crime','panki mandir nearby');