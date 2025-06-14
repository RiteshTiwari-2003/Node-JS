## node js file system module
node js comes with a package to handle insteraction with the file system , its called the fs module 
to use the fs module inside your code you need to first import it using the require keyword
since it is a build in package you do not need to install it using npm.

fs modules provide both synchronous and asynchronous metthod for handling file operation

in fs module the synchronous method end with the word sync in their name for example the read file synchronously we use readFileSync method and for rwead it asynchronously use use readFile

file constants:
to make it easy to work with file and folder being run by the current node js project it provide two constant 
these constant are known as __dirname and __filename and are globally available without you having to require any package 

__dirname contains the absolute path to the directory in which the file which is being executed currently is stored 

__filename contain the absolute path to the file which is being executed currently is stored 

## synchronous file operation 
in node js we have the option of performing file operation synchronously 
synchronous file operation means if you are reading a file which is really big then untill the entire file read your program cannot contniue to execute next operation .

## asynchronous file operation in node js

in node js we have the option of performing the file operation asynchronously as well 
asynchronous file operation means that if you are reading a file which is really big then untill the entire file is read your program can continue to execute other next instruction as the large read operation is pushed in background to a new thread 

most of the file operation are encouraged to be performed asynchronously as it makes the application more responsive 

asynchronuos file operation take a filen name and call back function in which node will pass the error (if any) and data to be proceed after the data is read by the background  process thread

const fs=require('fs');
console.log('Done Before');
fs.readFile('sample.txt',function(err,data){
    if(err!=null){
        console.log(err);
        return;
    }
    console.log(data.toString());
})


## to extract information fro file in node js we use fs.stat()
to extract information about a file in node js comes with a simple method call fs.stat()
the method takes a path to a file and a callback function which is called and passed the information about the file 
the stat data expose some usefu information 
1. uid: the numeric user identifier of the user that owns the file 
2. gid: the numeric group identifier of the grou which owns the file 
3. size: the size of file in bytes 
4. atime: the timestamp indicating the last time the file was accessed 
5. birthtime: the timestamp indicating the creation time of file 

## file stats method 
1. isDirectory(): return true if given path describe a file system directory 
2. isFile(): return true if given path describe a regular file 
3. isSocket(): return true if given path describe a network socket.
4. isSymbolicLink(): return true if given path descibe a symobilc link.

:: check if a given path is file or directory :
const fs=require('fs');
fs.stat('check',function(error,data){
    if (error!=null){
        console.log(error);
        return;
    }
    if(data.isDirectory()){
        console.log("Directory");
    }
    if(data.isFile()){
        console.log("file");
    }
})
fs.stat('sample.txt',function(error,data){
    if (error!=null){
        console.log(error);
        return;
    }
    if(data.isDirectory()){
        console.log("Directory");
    }
    if(data.isFile()){
        console.log("file");
    }
})

## node file watcher 
node js allow us to watch file or directory for changes and respond to those changes if necessary 

for example if we wish to monitor a file and if the content of the file are changed and saved then we can log it to the databse table 
watch a file and log changes to the console 
const fs=require('fs');
fs.watchFile('sample.txt',function(cureent){
    console.log("changes at:"+current.atime);
})

## watch a folder and logs changes to the console

const fs=require('fs');
fs.watch('check',function(event,data){
    console.log(`${event} :${data}`)
})
where check is folder name in that same directory where this above script.js present 

### printing the absolute path to the current file or directory 

step 1 : create a file name constant.js  
step 2 : open it in any text editior 
step 3; type the following code :
console.log(` the absolute path to the current directory is : ${__dirname}`);
console.log(`the absolute path to the curent fil is : ${__filename}`)

### reading the content of the synchronously 

1. create a file name read_sync.js and a text file named sample.txt with some sample txt in it 

2. open read_sync.js in any code editor and write these code 

const fs=require('fs');
console.log("done before reading file synchronously");
const data=fs.readFileSync('sample.txt');
console.og(data.toString());
console.log("done after reading file synchronoously");

### read the file asynchronously
const fs=require('fs');
console.log("done before reading file asynchronously");
fs.readFile('sampe.txt',function(error,data){
    if (error){
        console.log(error);
        return;
    }
    console.log(data.toString());
})
console.log("doen after reading file asynchronously");

### checking if a given path is a file or directory

step 1; create a file name is_directory_demo.js and another named sample.txt and folder name check all these three present in same folder or directory 

open is_directory_demo.js in any text editor:
type the following code 
const fs=require('fs');
fs.stat('check',(error,stats)=>{
    if(error){
        console.log(error);
        return;
    }
    if (stats.isDirectory()){
        console.log("given path is directory");
    }
    else if(stats.isFile()){
        console.log("given path is file");
    }
});
fs.stat('sample.txt',(error,stats)=>{
    if(error){
        console.log(error);
        return;
    }
    if(stats.isDirectory()){
        console.log("given path  is directory");
    }
    else if(stats.isFile()){
        console.log("given path is file");
    }
})

## monitor file and logs changes to the console 
step 1: create two file named as file_watcher.js and sample.txt

open file_watcher.js in any text editor and write this part of code 

const fs=require('fs');
fs.watchFile('sample.txt',(current)=>{
    console.log("file was changed at"+current.atime);
})

## monitor directory and logs changes to the console

create a file name dir_watcher.js and folder check

in dir_watcher.js 

const fs=require('fs');
fs.watch('check',(event,filename)=>{
    console.log(`${event}-${filename}`);
})

