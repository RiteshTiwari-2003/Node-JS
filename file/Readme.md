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