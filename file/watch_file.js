const fs=require('fs');
fs.watchFile('file.txt',(eventType,filename)=>{
    console.log(`change detected in file:${filename}:${eventType}`);
});
/** also now i check how to rename the file from any name to any name like i want to rename file.txt to example.txt */
fs.rename('file.txt','example.txt',(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("file renamed successfully");
});