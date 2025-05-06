const fs=require('fs');
const readableStream=fs.createReadStream('example.txt',{encoding:'utf-8'});
readableStream.on('data',(chunk)=>{
    console.log("received chunk:",chunk);
});
readableStream.on('end',()=>{
    console.log("finishing the reading file");
});
readableStream.on('error',(err)=>{
    console.error("error in reading file",err);
});
/* *stream internally implementing the events like .on .on method but you not see .emit why who is doing the .emit .emit is done by fs module only
it is not in your control , whenever there will be fire you will be notified but you are not the reason for the fire ,  
event will be triggered automatically by fs module in stream you can not read all thing one time you read part by part like chapter by chater 
chunk by chunk
like when error function execute like when at the place of exxample.txt which currently present in current directorybut i use other name file which not present
 */
