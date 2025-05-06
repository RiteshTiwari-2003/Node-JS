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
/**so emit method means event emit event happen and on method basicslly tell about subscriber like who subscribe only those people got notification
 * when event happen or emit 
 */