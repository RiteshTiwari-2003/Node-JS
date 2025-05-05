const fs=require('fs');
fs.watchFile('file.txt',(eventType,filename)=>{
    console.log(`change detected in file:${filename}:${eventType}`);
});