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
})