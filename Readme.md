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


