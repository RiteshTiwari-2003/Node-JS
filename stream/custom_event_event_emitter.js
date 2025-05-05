class Ritesh extends EventEmitter{
    whatisYourName(){
        console.log('my name is ritesh');
    }
}
const myCustomEmitter=new Ritesh();
myCustomEmitter.whatisYourName();