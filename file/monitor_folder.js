/**now we need to monitor folder 
 * 
 * 
 */
const fs=require('fs');
const folderPath='./file';
fs.watch(folderPath,(eventType,filename)=>{
    if(filename){
        console.log(`change detected in file:${filename}:${eventType}`);
    }
    else{
        console.log(`change detetcted :${eventType}`);
    }/**ike if we want change in file in folder in file folder like i create file delete file rename file change file then if condition execute like when i perform file related thing 
    but when i perform folder like not go in file in that folder (file) in that folder related any change then this happen */
})
