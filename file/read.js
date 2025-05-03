const fs=require('fs');
//synchronous
try{
    const data = fs.readFileSync('file.txt','utf8');
    console.log("Sync read:", data);
}
catch(error){
    console.error("Error reading file:",error);
}
//asynchronous 
fs.readFile('file.txt','utf8',(error,data)=>{
    if(error){
        console.error(error);
        return;
    }
    console.log("Async read:",data);
});