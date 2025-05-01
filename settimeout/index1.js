// callback pattern
// function task1(){
//     console.log("task1 bis completed");
// }
// function task2(){
//     console.log("task2 is completed");
// }
// task1();
// task2();
//out put of above is come like this  task 1 is completed , task2 is completed and after using settimeout function 
function task1(){
    setTimeout(() => {
        console.log("task1 is completed");
        
    }, 2000);
}
function task2(){
    console.log("task2 is completed");
}
task1();
task2();//output of above is this that task2 is completed , task1 is completed 

// function step1(){
//     setTimeout(()=>{
//         return "task1 result";
//     },2000);
// }
// function step2(resultfromStep1){
//     console.log(resultfromStep1+"task 2 completed");
// }
// const result1=step1();
// const result2=step2(result1);
// console.log(result2);//output is undefined task 2 completed  so solution of above is below

// function step1(){
//     setTimeout(()=>{
//         step2("step1 result");
//     },2000);
// }
// function step2(resultFromStep1){
//     console.log(resultFromStep1+"task2 result");
// }
// step1();//output is step1 result task2 result after 2 second come 

//now next method for function calling using settimeout also this is 
function step1(callback){
    settimeout(()=>{
        callback("step1 result");
    },2000);
}
function step2_alternative(resultfromStep1){
    console.log(resultfromStep1+"-----"+"task2 result");
}
function step2(resultFromStep1){
         console.log(resultFromStep1+"task2 result");
     }
step1(step2_alternative);
step1(step2);


