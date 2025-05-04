const fs=require('fs');
//synchronous
try{
    const data = fs.readFileSync('file.txt','utf8');
    console.log("Sync read:", data);
}
catch(error){
    console.error("Error reading file:",error);
}// this will give out put sync data : ritesh hbjhjjnj 45433455../.../    this is synchronous operation when line 4 full executed after that line 5 executed also below code give same result

// try{
//     const data = fs.readFile('file.txt','utf8');
//     console.log("Sync read:", data);
// }
// catch(error){
//     console.error("Error reading file:",error);
// }
//asynchronous 
fs.readFile('file.txt','utf8',(error,data)=>{
    if(error){
        console.error(error);
        return;
    }
    console.log("Async read:",data);
});
/**bellow is the content of asynchronous thing 
 * date 4-5-2025
 */
try{
    const data = fs.readFile('file.txt','utf8',function(error,data){
        console.log(data)

    });
    console.log("aSync read:", data);
}
catch(error){
    console.error("Error reading file:",error);
}//output of this code is async read : undefined ,  ritesh hbjhjjnj 45433455../.../
/**but in above when we want to print content first and then outside consoe then use promise 
 * //synchronos 
 * const fs=require('fs').promises;
 * try{
 * fs.readFile('file.txt','utf8').then((content)=>{
 * console.log("content",content);}).then(()=>{
 * console.log("sync read");})}
 * catch(err){
 * console.error(err);}
 */