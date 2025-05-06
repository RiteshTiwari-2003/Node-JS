const EventEmitter=require('event');
const eventEmitter=new EventEmitter();
eventEmitter.on('fire',(address)=>{
    console.log('call fire department and give address',address);
});
eventEmitter.off('fire',(address)=>{
    console.log('call fire department and give address',address);
});
eventEmitter.emit('fire','in bangalore hsr layout');

/**like in ndtv a prodcast happen that xyz party won the election but you dont want this party won the election then after this listen you can unsubscribe this event or channel 
 * 
 */
eventEmitter.on('ndtv',(content)=>{
    console.log('watch the content:',content);
});
eventEmitter.emit('ndtv','xyz party won the election');
eventEmitter.off('ndtv',(content)=>{
    console.log('watch the content',content);
});
/**lets suppose that after unsubscribe after off method when any event happen like 
 * eventEmitter.emit('ndtv','apple party won the election');
 * 
 * then i have not got this notification because i have unsubscrib channel before this event happen 
 */