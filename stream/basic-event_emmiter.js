const EventEmitter=require('events');

//create instance of event emitter

const eventemitter=new EventEmitter();
//define a event listner 
eventemitter.on('fire',(address)=>{
    console.log('fire event has been fired',address);
});
// fire a event
eventemitter.emit('fire','in bangalore hsr layout , sector 5'); 
/**but like when fire happen then when you say somewhere fire happen then it does not make sence anymore so also tell where this fire event happen like in which building then if fire is event then it must know about event's data 
 * so in line 11 you can pass firs argument event and second argument as event's data 
 * 
 * but when you pass the second argument as event data in emit function then it must pass same event 's data as argument in on method's callback function
 * 
 * 
 */