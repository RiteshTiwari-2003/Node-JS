const fs=require('fs');
fs.mkdir('newDir',(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("directory created successfully");
});