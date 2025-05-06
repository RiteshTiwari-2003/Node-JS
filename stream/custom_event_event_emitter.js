const EventEmitter=require('events');
class Ritesh extends EventEmitter{
    whatisYourName(){
        console.log('my name is ritesh');
    }
}
const myCustomEmitter=new Ritesh();
myCustomEmitter.whatisYourName();
/**in this i can also use on and emit method because of inheritence we can also use parent method 
 * 
 */
myCustomEmitter.on('bomb_blast',()=>{
    console.log('event handler will called');
});
myCustomEmitter.emit('bomb_blast');