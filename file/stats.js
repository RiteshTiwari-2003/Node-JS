const fs=require('fs');
fs.stat('output.txt',(err,stats)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("file stats:",stats);
});
/**stats is also be used to find that it is file or directory 
 * 
 * const fs=require('fs');
 * const path='file.txt';
 * fs.stat(path,(err,stats)=>{
 * if(stats.isFile()){
 * console.log(`${path} is a file`);}
 * else if(stats.isDirectory()){
 * console.log(`${path} is a direcotory`);}
 * else{
 * console.log(`${path} is neither a file nor direcory`);}})
 * 
 */