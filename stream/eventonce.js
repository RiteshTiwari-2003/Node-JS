const EventEmitter=require('events');
const eventEmitter=new EventEmitter();
const eventHandler=(content)=>{
    console.log('watch the video',content);
}
eventEmitter.on('ndtv',eventHandler);
eventEmitter.emit('ndtv','xyz part won the election');
eventEmitter.emit('ndtv','apple party won the election');
eventEmitter.emit('ndtv','bjp party won the election');
/**in above i emit many time a event or you can say that one notification notify all the time when when event emit same event handler call again and again 
 * so what if i want only notify for once then i use once method at the place of on 
 * 
 * like if i want that how many people subscribe or how many people are doing .on then i use listnercount method 
 * 
 * const listnerCount=eventEmitter.listenerCount('fire');
 * console.log('number of listener for fire event:',listnerCount)
 */