const fs=require('fs');
fs.mkdir('newDir',(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("directory created successfully");
});
/**how to remove directory 
 * 
 * const fs=require('fs');
 * fs.rmdir('newDir',(err)=>{
 * if(err){
 * console.error(err);
 * return;}
 * console.log("directory deleted");})
 * 
 * if you want to delete the file you can also use unlink method 
 * const fs=require('fs');
 * fs.unlink('newDir',(err)=>{
 * console.log("file deleted successfully");})
 */