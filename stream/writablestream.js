const fs=require('fs');
const writableStream=fs.createWriteStream('example.txt');
writableStream.write('heelo ritesh');
writableStream.write('this is write stream examplle!\n');
writableStream.end('final chunk of data');
writableStream.on('finish',()=>{
    console.log('finishing writing a file');
});
/**also like reading there is easy in writing writing chapter by chapter chunk by chunk lline by line 
 * like first read harry potter and write entire whole book is easy or writing chapter bt chapter easy chapter by chapter easy 
 * 
 * if at the place of end we use write then finish function not execute  because finish only execute after end function execution 
 * 
 * like if read any text like (bigfile.txt) which is many line long about around or close to 1 gb size by the first i read this file by simple fileRead method 
 * 
 * like this 
 * 
 * const fs=require('fs);
 * fs.readFile('bigfile.txt','utf-8',(err,data)=>{
 * if (err){
 * console.error('error in reading file',err);
 * return;}
 * console.log(data);}
 * then by above method when you run the file then error come that string is too large 
 * node js has string size limit (-512 mb)
 * so if you wriute above file together at once then can not read so read chapter by chapter chunk by chunk using stream
 * const fs=require('fs');
 * const readStream=fs.createReadStream('bigfile.txt',{encoding:'utf-8'});
 * readStream.on('data',(chunk)=>{
 * console.log(chunk);});
 * readStream.on('end',()=>{
 * console.log('finishing reading the file');});
 * readStream.on('error',(err)=>{
 * console.error('error in reading file',err);})
 */