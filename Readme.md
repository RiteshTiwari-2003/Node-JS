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


