const fs=require('fs');
const {Transform}=require('stream');
//create a transform stream to convert a text into uppercase
const upperCaseTransform=new Transform({
    transform(chunk,encoding,callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});
const readStream=fs.createReadStream("example.txt");
const writeStream=fs.createWriteStream("example1.txt");
readStream.pipe(upperCaseTransform).pipe(writeStream);
readStream.on("end",()=>{
    console.log("file has been transfored successfully");
});
