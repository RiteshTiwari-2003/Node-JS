const fs=require("fs");
const stream=fs.createReadStream('example.txt',{encoding:'utf-8'});
stream.on('open',function(){
    console.log('stream is open');
});
stream.on('data',function(chunk){
    console.log('data is received',chunk);
});
stream.on('end',function(){
    console.log('stream is end');
});
stream.on('error',function(err){
    console.error('error in stream',err);
})