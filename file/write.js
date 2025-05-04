const fs=require('fs');
//synchronous
try{
    fs.writeFileSync('output.txt','Hello,this is a test file hb','utf8');
    console.log("file written successfully(sync)");
}
catch(err){
    console.error("Error writing file",err);
}

//asynchronous 
fs.writeFile('output.txt','hello node js async','utf8',(err)=>{
    if (err){
        console.log(err);
        return ;
    }
    console.log("file written successfully(async)");
});