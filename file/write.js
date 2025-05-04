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

/**now for appending text into file
 * synchronous
 * const fs=require('fs');
 * try{
    fs.appendFileSync('output.txt','/nHello,this is a test file hb','utf8');
    console.log("file appended successfully(sync)");
}
catch(err){
    console.error("Error appending file",err);
}

asynchronous 
fs.appendFile('output.txt','/nhello node js async','utf8',(err)=>{
    if (err){
        console.log(err);
        return ;
    }
    console.log("appending  successfully(async)");
});


like we can aslo do code synchronous without using appendFileSync only by using appendFile like using promise and then 
const fs=require('fs').promises;
//synchronous 
try{
fs.appendFile('output.txt','/nhello node js async','utf8').then(()=>{
    console.log("appending text sync");});}
    catch(err){
    console.error(err);}
 */