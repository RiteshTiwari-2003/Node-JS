const fs=require('fs');
if (fs.existsSync('output.txt')){
    console.log("file exists");
}
else{
    console.log("file does not exists");
}