/**now we learn how to read the folder like content of file we seen before like stats but now i see how to read content of folder  */
const fs=require('fs');
fs.readdir('.',(err,files)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("content of folder is:",files);
});/**from above foldr only i can read current folder thing where currently i present but if we want to read content of xyz folder then 

write this :

const fs=require('fs');
fs.readdir('./xyz',(err,files)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("content of folder is:",files);
});
*/