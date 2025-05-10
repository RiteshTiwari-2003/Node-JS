/**now lets say i want to copy entire book not chapter by chapter not chunk by chunk by chunk ib want to copy entire book blindly then 
 * for this use pipes 
 * 
 */
const fs=require('fs');
const readStream=fs.createReadStream('example.txt',{encoding:'utf-8'});
const writeStream=fs.createWriteStream('example1.txt');
readStream.pipe(writeStream);
readStream.on('end',()=>{
    console.log("file copied successfully");

})