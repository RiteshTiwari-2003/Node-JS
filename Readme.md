### Nodes js Introduction
Node js is the open source and cross platform java script runtime envoirment ,
it is populer tool for almost any kind of project , node js is run the v8 javascript engine , the core of google chrome 

the node js app runs in a single process, without creating a new thread for every request , node js provide a set a set of asynchronous I/O premitives in its standard libraries that prevent javascript code from blocking and generally libraries in node js written using non blocking paradigm 

#### how to create node project 
1. install nodehs in your window 
check version using node -v 
then make a project folder in that folder 

2. make a java script file (like main.js) and in vs code in terminal come in that project folder directory 

and run node main.js 
now whatever javascript code write in that mainjs file executed .

make a package .json file into this using run this command npm init in terminal in this directory .
now if we want to install express js then go into that folder in directory in vs code and write this command 

"npm install express" 
and for all dependencies download i run the script "npm install"

like after installing package we need to import it like 
main.js file :
const os=require("os");
const express=require("express");

function apple(){
    console.log("I ove apple",os.platform());
}
apple();

//outy put of abov code is i love apple win32.

so in package.json in dependencies key a object pregent like key valye pair where at the place of key all libaqries present and it's value version show. if you not install the thing which prsent in dependencies the program not run like express we first need to install using npm command and then import it into code but some librariezs like os which is basically a built in library we do not need tio install we only import it .

but what if we want replace require with import 

import os from 'os';
import express from "express";
but when you run then this error come that can not use import statement outside the module 
so what is the solution set the type:"module" in package.json 
like made one more file in samefolder wherei ade main.js and package.json , nodemodule, 
like we made usa.js  
const orange="100kg";
module.exports={orange};

and in main.js file use middle bracket ike {orange}  
like 
import {orange} from "./usa.js";

so again error come so remove curly braces so module.exports should be prural so we remove curly braces {}
like : import orange from "./usa.js";
and in usa.js   
module.exports=orange;

again error come because these above method wrong like in usa.js 
const orange="100kg";
export default orange; 
and in main.js import orange from "./usa.js"; now project runnning successfully .


#### and above case is related to that when you want to import sigle thing but if yoyu want to import more than one thing then you can do like this 

like 
in usa.js 
export {orange,mango};
in main.js i also use allimports also like 
import asllimports from "./usa.js";
and 
console.log(allimports.orange);
and in usa.js you can also write this like object also 
export {"orange":orange,"mango":mango};

also ike if you export many thing but you want only one thing import then import like this 

export {orange,mango};
and in main.js 

import {orange} from "./usa.js";

in your faimly like a mother is a thread , she is like a single thread 
i know there is father , both parent are importent but in this case i am treating just mother why mother is like a main thread 
and she has to do lot of thing in house , father will got o outside he will try to earn mondey , i am considering here mother is a housewife , so she has to do lot of things , she has to take care o children , everything but she is alone 
she is single threaded main thread 

synchronous approach : in synchronous approach what will your mother do , she will start to cook , she has to wait in kitchen 
till the cooking is complete to do the second work , one after another because one work complete then after this she do other work
synchronous means step by step , first step complete to go to the second step 
but sometimes we need to do things parallely , like two things parallely how you do you need two people , two thread ,
you need multithreading threaded envoirment 

multithreaded means father come here father is coming for helping mother even though mother ismain thread , like father independently do some other work when your mother is cooking , like your father can wash the cloath 

whe you say about node js then it is single threaded but in reality it is not , it is single threaded but internally it uses multithreaded , we are working in asynchronous pattern 

it means that whenever that means when your mother when she start cooking , she will not be in kitchen for two hours , she will start to boil some vegitable but she will not wait there till it boil , she will come out and she will start washing cloathes , she will switch on and put all cloathes into washing machine 
she can move on from one work to another work 
whenever the vegitable are boiled , she can come back to kitchen and resume from there 

so asynchronously without waiting for one work to complete , she can hop over , like she can start one work , let it complete , it will take its own time 
like i write a code 

function apple(){
    return "hi"
}
const result=apple();
console.log(result)

like in above code when i remove line 105 return "hi" then function what return it return undefined 

settimeout() function so in this function we pass the two argument in which one is function so this is called call back function like when you pass one function as a argument of anotyher function this is called callback function 

setTimeout(()=>{console.log("Hi after 2000 mii second");},2000);
setInterval(()=>{console.log("print this every 2000 mili second");},2000)
like 
function serveMeFood(){
    console.log("dinner");
}
console.log("Hi");
setTimeout(servemeFood,3000);
console.log("BYe");

then out put is print ed like this
hi
bye
printed and after 3 second dinner is printed    , so this is asynchronous because this is not waited for settimeout function will executed it execute next statement after settimeout , you can call settimeout like ananymous function like 

setTimeout(function serveMeFood(){
    console.log("dinner");
},3000);  
setTimeout(function (){
    console.log("dinner");this function has no name then it is called ananymous function 
},3000); 
also called like this 
setTimeout(()=>{
    console.log("dinner");//this is called fat arrow function 
},3000);

setInterval(()=>{
    console.log("serve me food");
},2000);
so after every 2 second serve me food printed continuously 

### process and program 
a set of code or instruction or statement is program but when i run the program then that running program called as process 
process is created by os and each process assigned id process id .
what is the background process this is the process which needed to proper functioning of your os like camera and printer every one need driver so in the background lots of programm are running and when program is running then it is called process

but when it is running as background it is called background process 

what about foreground process foreground process are app , 
like when you want to your program to run then you need some resources , when you go into task manager in your pc then in that what kind of resources we need we  need cpu , memory, disk , network 

what is cpu?
so your program from hard disk will be loaded each instruction whatever it have , now calculation, who is doing the calculation ?
cpu is doing it for run your program , execute the instruction you need cpu so each process willbe assign cpu 

what is memory?
when you do calculation you use variable when you go into low label programing there resiter , basically ram , ram is needed 
ram is needed why each instruction has to be loaded from your file system , 
instruction will be loaded in file system qand from file system to ram and within the ram you have register so all these called memory register , ram , everything under memory 

what is disk?
some program needs to have access the file system like we were learning about fs module ? so disk will also needed disk means it is hard disk where your files are saved 
so every program when it is runnning it need resources to function properly 

what is network?
ets say i am using google chrome then chrome for transforming information from one place to another or from one person to another need network 

process will not be promises to run program forever , a process will be like , if i run a program lets say it has only 10 line 
it will execute al those 10 line like in file and stream we copy a file into another file then like take 5 second to copy then till 5 second my process was lio , after completing the last instruction my process was killed by operating system 
and all the resources were freed 
when the program complete its operation the process will be killed by operating system so al th resources which were assign to the process freed up 
so you know process will not be running 24 7 process will start from line number 1 it will do all the work , it will execute all the instruction and when it is completed it is exit 
so what about those process which is like a process but it will not exit it will keep runing , it is expected to run forever 
like if i start now i will not kill it 
it is expected to run forever 
do we have such process so what are those spacial process are called? 
they are called services , it will run forever so what it will do it will handle some request it will do service 
if someone want some service from program then they will do request they will send the request to the services 
and services will be prov ide the program the request response willbe provide by the service 

lets check in real example like hospital provide service , whether it is process or service , it is service , why it is service because you expect that hospital will be open for 24 7 , and what type of service it provide it provide medical service ,
you have to request fo service only , when you request for the service you will get the respinse from the hospital 

each service i sknown for handle thhe request process the request and then respind to the request , who will be making the request , client 
these is called as server program , who will be making the request to them is called client program
so this is client server architecture , in the hospital hospital will be server program , patient are requesting for medial service then it is client program 

### file server
i a staritng with file server , what is file server 
every server has its own purpose , hospital has its own purpose what is purpose they offer medical service 

like this there are fileserver , what is purpose the purpose is serve files to client 
in file server whoever want the file is client 
like i will create file server program i have running it , this program willnot stop , until i forcefully kill it 
in ideal case file server running 24 7 hours .
from browser i wl try to make request to the file server program , and file server program send the program   http protocals
so which protocal youb used ofr this service http protocal 
so every service has its own protocal , so in case of ile server i am using browser so i am using http based server http protocal 
lets say my mother or father want to access some file from my laptop then they can open these files using their mobile 
how from their mobile they will make a request they will open the brwoser browser is client it will make a request to my program my computer basically on my ip address and each server when it comes on ip address every compiuter its own unique ip address even in local you have private ip address 
when request made to my ip address , it will only reach to myc computer or laptop , 

ip address is oly hep to forward the pocket or request till my laptop but inside my laptop i have operating system 
within my operating system i have multiple program there is lot of services how to my mother's browser know that it has to communicate with specific server it should not send a request to different service so this is happpening with port number 
port number is importent to uniquly forward the request to service , each service should running on different port number you can not have two service or two program running on same port number 
http protocal + ip address + [port number  ] if you know these thing then they can access ant file 

### http status code 
400 bad request      client sent an invalid request 
401 unauthorized     authentication is required 
403 forbidden        ckient does not have access 
404 not found        the requested resource doen not exist 
405 method not allowed    http method not allowed on this resource
408 request time out     server timed out waiting for the request 
429 too many request     cient has sent tomany request in sort time 
500 internal server error   generic server error 
502 bad gateway      server received an invalid response from another server 
503 server unavailable     server is temporarily overloaded or down.

### what is the difference between normal function and apis?

you need to understand that a function is a group of statement or a logic which can be run to perform any task , so you will create a specific task you will create a sepecific function .
when you run the function when you call the function , it will give the result and what is the api 
when you call the api it is perform some operation like function so both are corelated but api is more powerfull ,
why because function means when you have a script you can all the function within script or you can import in other file you can call the function 
only to within your project or whoever import it in them but api are exposed into internet , what does that means , 
it means that if someone is in your network , okay i mean specific wifi if my friend or my mother are using same wifi , 
they will able to call the api from their local machine this is the advantage , function means i only call in my project or some project where i import it but api can be called from other system within the network .

if my laptop is connected to public ip i was assigned to a public ip address then anyone in entire world can call the api 
if i exposed my laptop to the internet then you can call the my api my local machine api from your laptop from your mobile 
basically api are internally it kind of function they are also return some logic or result but it return result over the internet 

## node modue packages build in packages 
1. path
2. fs
3. http
4. url
5. querystring
1. path:  the path module is used to deal with difference in file path between multiple os .
2.  fs module: fs module is used to perform file i/o based opertion
3. http : http module is used to create a small and lightweight http server  in node. 
4. url : the url module is used to parsing , manipulating and dealing with web address(url)
5. quierystring : quiry string module is used to parse and work with url quiery string 

in node js you can break up large piece of code into smaller piece called module , these module allow you to reude your code 
while creating your module , one should try to seperate every module in seperate file ,this help inkeeping your code modulerized 

## what is npm ?
npm is node js in built package manager , it allow developer to include package (code that other developers wrote ) in their project and use them 

npm manages packages by installing the user specified version of the packages 

npm is central repository which allows developer to share package they have written for common task such as validation and data access.
npm also make project portable means you can easily share your code with other developer and they can also run your project by downloading the dependencies from npm. 

## dependencies ?
we use npm to install the packages that our project depend upon .these packages are called dependencies 
npm allow us to manage these dependencies as well as dependencies of these dependencies , so if one of the package that we wish to use 
depend on some other package then npm also download it for us 

## event loop
event loop is the part of node js runtime , it is the process that run constantly in the background ,
it checks the call stack and cllback queue , if the call stack in empty and there is in the callback queue if any process present then it reove fro there and push in call stack like means if call stack is empty and there are tasks in callback queue , then the event loop 
removes a task from the callback queue and pushes it into the callstack to be run 

## callbacks
callbacks are simply functions that contains some code that you wish to run after a long running task has been finished in the background
callbacks are olden way of writting asynchronous cod eby passing functions as the argument of a long running task to be called later in the future 

### disadvantage of callback 
the major disadvantage of callback is that if have a lot of asynchronus code that run one after the another and you use callback then you run into a pro lem called as 'callback hell'.

callback hell is simply multiple callback nested inside each other making your code difficult to read and understand 

### promises
so promises come after callbacks and are used to accomplish the same task as specifying some code to be run only after a long running task is finished 

the reason that promise are considered better than callback is that instead of passing and nesting function inside one and another 
proise allow to chain them in steps 

promise chaining :
to chain promise , you can use then method on the promise , each call to then method expects a function to be passed in to be run on the output that is returned by the previous then method .

each promise may return smoe value that will be passed in the next then call.
chaning promises make your code more relaiable concise and readable 

it alow you to to work on asynchronous programming asa series of step by step instruction 

## using promise with settieout function 
function timer(time){
    return new Promise(function(resolve,reject){
        setTimeout(function(){resolve(time)},time);
    })
}
timer(1000).then(function(time){console.log(`Done after ${time} second`)})

## async await 
async await is the latest addition to the javascript language to handle asynchronous code 

using asunc await , instead of using the promise  and then method one after another chaining them
you can use the just async keyword just before the function to return a promise and use the await keyword to wait for the promise resolve and pros=duce some result.

async function logAfterWait(){
    let promise=new Promise((resolve, reject)=>{
        setTimeout(()=>resolve("done!"),1000);
    });
    let result=await promise;
    console.log(result);
}
ogAfterWaiting();

function timer(time){
    return new Promise(function(resolve,reject){
        setTimeout(function(){resolve(time)},time);
    })
}
async function sleep(time){
    let result=await timer(time);
    console.log(result);
}
sleep(1000);

## asynchronous error handling 
all the method of working with asynchronous code handle error differently 
when using callback the function you passed as argument in the code may get called with 
two argument , representing result and  error so if the error is not null then you perform error handling 

function longRunningTask(url,callback){
    const response=getDataFromInternet(url);
    if (response==null){
        callback({error:'some error occured'});
    }
    else{
        callback(null,response);
    }
}
longRunningTask('http://some-url.co',function(error,data){
    if (error!=null){
        console.log(error);
    }
    else{
        console.log(data.json());
    }
})

in promises at the end of the promise chain you pass the error handling function in a call to the .catch() method as an argument  this method is callled if there are any error during the execution of promise .
getSomeData(url).then(data=>saveToDatabse(data)).catch(error=>console.log(error));

in async await you can simply wrap your code in a try and catch block and handle the error in catch block it is very similer to exception handling 

## performing error handling using callbacks 
function multiplyEvenNumber(x,y,callback){
    if(x%2!=0|| y%2!=0){
        setTimeout(function(){callback("odd number")},2000);
    }
    else{
        setTimeout(function(){callback(null,x*y)},2000);
    }
}
multiplyEvenNumber(7,9,function(error,result){
    if (error!=null){
        console.error(error);
    }
    else{
        console.log(result);
    }
})
multiplyEvnNumbers(8,10,function(error,result){
    if (error!=null){
        console.error(error);
    }
    else{
        console.log(result);
    }
})

error handling in promises 
function multiplyEvenNumber(x,y,callback){
    return new Promise(function(resolve,reject){
        if(x%2!=0||y%2!=0){
            setTimeout(function(){reject("odd Number")},2000);
        }
        else{
            setTimeout(function(){resolve(x*y)},2000);
        }

    })
}
multiplyEvenNumber(7,9).then(function(x){console.log(x);}).catch(function(x){console.log(x);})

and in  async await error handling done like this 

function multiplyEvenNumber(x,y,callback){
    return new Promise(function(resolve,reject){
        if(x%2!=0||y%2!=0){
            setTimeout(function(){reject("odd Number")},2000);
        }
        else{
            setTimeout(function(){resolve(x*y)},2000);
        }

    })
}
async function multiply(x,y){
    try{
        const result= await multiplyEvenNumber(x,y)
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
multiply(7,9);

## step to write event driven code 
event driven code is little difficult to wrap our head around it , Follow the below steps to write event driven code 

1. import the event module : first import the event module using require keyword 
2. instantiate the event emitter : instantiate  a object of EventEmitter class from inside the event module 
3. register a callback for event : on the instantiated object , register a callback to be called when an event is triggered 
using the on method 
4. trigger the event: trigger the event using emit method and pass in the name of event which will call the callback 

the event emitter class in nodejs is used to create objects that can fire/emit event s and register callback that can handle those event 
when an event is triggered on an object of the EventEmitter class , the object will call the callback that is registered for the event 
by the user .

## emitting the event :
emitting event is pretty straightforward using the event emitter class 
to emit an event we call the emit method on the EventEmitter object passing the evnt name as a argument and then the registered callback is called 

### emitting and rsponding to the event :
const events=require('events');
const emitter=new events.EventEmitter();
emitter.on('some-event',function(){
    console.log("Some event called ");
})
console.log("before some event");
emitter.emit('some-event')
console.log("after some event");

## stream
stream can be thought of as a collection of data, this collection can be either small or large 
streams allow us to consume data from external source to small chunks 

## types of stream

there are four type of stream in node 
writable : ther are stream to which we can write data e.g. file stream
readable : thier are stream from whcih we can read the data e.g. fileStream 
duplex : there are stream from/to which we can read / write data simultaniously e.g. socket 
transform   these are duplex stream which mdify or transform as it is wrten or read 

## reading data from afile using stream 
const fs=require('fs');
const stream=createReadStream('sample.txt');
stream.on('data',function(data){
    console.log(data.toString());
})

## writing data in stream 
const fs=require('fs');
const data="this is my node js tutorial";
const stream=fs.createWriteStream('data.txt');
stream.write(data);


## stream event 
besides reading from a readable stream source and writing to writable stream stream can also be consumed with event directly

stream event allow us toi consume stream by executing some code defined in a callback when an event occur in a stream , like reaching the end of stream 

here is the list of some impoetent stream event 
data : the data event is fired when the stream passes a chunk of datato a consumer .
end : the end event is fired when there is no more data to be consumed from the stream 
drain: the drain signal denotes that writable stream can receive more data 
finish: the finish event is emitted when all the data have been flushed to the underlying system 

const fs=require('fs');
const readStream=fs.createReadStream('sample.txt');
const writeStream=fs.createWriteStream('data.txt');
readStream.on('data',function(chunk){
    writestream.write(chunk);
})
readStream.on('end',function(){
    writeStream.end();
})

### emitting and responding to the event 
step 1; create a file named event.js
write these code in that file in any text editor 

const events=require('events');
const emitter=new events.EventEmitter();
emitter.on('login',function(){
    console.log("customer is logged");
})
console.log("Some code");
emitter.emit('login');
console.log("some more evnt");

### reading data from a file usinf stream 
create two file one is named read_from_file.js and one is sample.txt

open the following filw read-from-file.js 
const fs=require('fs');
const readStream=fs.createReadStream('Sample.txt');
readStream.on('data',function(data){
    let chunk=data.toString();
    console.og(chunk);
})

#### writing data to a file using stream 
const fs=require('fs');
const data="written using stream";
const writeStream=fs.createWriteStream('demo.txt');
writeStream.write(data);

## processing stream event 
const fs=require('fs');
const readStream=fs.createReadStream('sample.txt');
const writeStream=fs.createWriteStream('demo.txt');
readStream.on('data',function(chunk){
    console.log(`writing ${chunk} to a new file`);
    writeStream.write(chunk);
})
readStream.on('end',()=>{
    console.log("streamended");
    writeStream.end();
})

## http in node js 
http stands for hypertext transfer protocal it is a hypertext protocal that is used on internet .
communication between client and server on the web is done on the internet using the http protocal 

http header :
http header are used to enable a client and server to pass the additional information with a http request and response 
a http header thought of as key value pair that consist of case insensitive key folowed by a colom (:) and then by its value .

## http response status code 
http status code are 3 digit code that are sent by the server to a client within a response they indicate whether a response is completed successfully 

the first  digit of response tell the class of response 

### http response classes 
there are five http response classes 
1. 1XX: indicate that the requerst hS BEEN received and the process is continuing .
2. 2XX: shows that the action is successfully reseived understood and accepted 
3. 3XX: indicates that further action must be taken in order to complete the request .
4. 4XX: tells that the request contains incorrect syntex or cannnot be fullfilled 
5. 5XX: tells that the server has failed to fullfill an apperently valid request 

## node http module
node js has build in module called http, which allow node js to transfer data over the hypertext transfer protocal 
the http module can be used to create an http server that can listen to requests on a specified port and responde to that requests 

### creating a http server 
const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.write('Hello. World');
    res.end();
}).listen(8000);

## http form data 
using the http protocal , users can also send the data submitted via form 
this form can be used to submit login credential complaint and so on. form data send to the server inside the reqquest nd can be parsed by the server to extract the user sumit data

## http form data request type 
there are two type of request we can use to submit a form with the http protocal 
get and post 
1. get : a get request gets data from the form encode it in the url as per quiery string parameters ,
and send it to the server the data sent using the get request is visible in url..

2. post : a post request get dataq from form , encode it , and send it to the server in the request the data send using the post request not visible into the url.

like in mongo with node js for database i use mongo db mongo db is a unstructured database in which i use no sql data in which no any schema rule and regulation present.

### query string 
query string is used to pass the data from a client to the server by encoding data in the url 
they can be thought of as key/value pair that are encoded in url 

node js comes with a built in query string module that allow us to deal with query string inside our node application 
the query string module contain a number of built in method that deals with encoding and decoding url 

# query string methods 
there are six type of query struing methid 

encode: the encode method producess a url query string from a given object by iterating through the object 
decode ; the decode method parses a url query string into a collection of key value pair
3. escape method ; the escape method perform url encoding on a given string , it is used internally by the stringify , and encode method 
4. parse: it is just alias for decode method of the query string module 
5. stringify; it is just alias for encode method of the query string module 
6 . unscape ; it perform url decoding on a given string , it is used by internally by parse and decode method 

encoding query string 
const querystring=require('querystring');
const data={
    'name':'abcd',
    'password':'efgh'
};
console.log(querystring.encode(data));

decoding querystring 
const querystring=require('querystring');
const qs='name=sample&password=sampe'
const data=querystring.decode(qs)
console.log("Name:",data.name);

### create an http server
step 1: create a fi;e name called http-server.js

step 2; open it in any text editor 
step 3; type the following code 

cosnt http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plane'});
    res.write ("hello world!");
    res.end();

}).listen(8000);

### process form data

step 1: make two file form-process.js and form.html  
in form.html place this code  
<!DOCTYPE html>
<html lang="en">
<head> 
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scalle=1.0">
<title>Form</title>
</head>
<body>
<form action="/" method="POST">
<input type="text" name="username" placeholder="username"/>
<input type="password" name="password" placeholder="password"/>
<input type="submit"/>
</form>
</body>
</html>

and form-process.js
const http=require("http");
const fs=require("fs");
http.createServer((req,res)=>{
    if(req.method="POST"){
        let body='';
        req.on('data',chunk=>{
            body+=chunk.toString();
        });
        req.on("end",()=>{
            console.log(body);
            res.end("ok");
        })
    }
    else{
        fs.readFile('./form.html',(err,data)=>{
            res.end(data);
        })
    }
}).listen(8000);

### encode a querystring
const querystring=require('querystring');
const data={
    'name':'myname',
    'password':'mypassword'
};
console.log(querystring.encode(data));

## decode querystring
const querystring=require('querystring');
const qs="name=ritesh&password=sape";
console.log(querystring.decode(qs));

### express js 
express js is webapplication development framework  based on node js 
its take care of lots of common task that we need to perform if we were to huild a web application in node js ,
such as parsing request , routing error handling 

express js provide many benifit like 
fast : express js is small framework and does not slow down an application 
minimal: it provide sonly the funcdamental web application feature 
un-opinioneted ; express js does not have default configuration so we can sructure our application as we wish it to be
simple: it is very simple and easy to use 
un-obtrusive: we can set up expres js however we want and use it with any library of choice 

## installing express js 
since wea re using node js , we will need to install express using npm , to install express in node application , first , we have to generate an npm project uisng the command "npm init -y"

 after generating the project we woul run the command "npm install express --save"
 here we have to make sure that we are using the "--save " flag or not the "--save-dev" flag as we need exprees js for application to rn




