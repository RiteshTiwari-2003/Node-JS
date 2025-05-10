const fs=require('fs');
const readStream=fs.createReadStream('example.txt',{encoding:'utf-8'});
const writeStream=fs.createWriteStream('example1.txt');
let lineCount=0;
readStream.on('data',(chunk)=>{
    const lines=(chunk).split('\n');
    let i =0;
    while(i<lines.length && lineCount<100){
        writeStream.write(lines[i]+'\n');
        lineCount++;
        i++;
    }
    if(lineCount>=100){
        readStream.destroy();
    }
});
readStream.on('close',()=>{
    writeStream.end();
    console.log('first 100 line copied to example1.txt successfully');
});