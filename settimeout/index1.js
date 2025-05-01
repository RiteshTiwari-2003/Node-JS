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

function step1(){
    setTimeout(()=>{
        return "task1 result";
    },2000);
}
function step2(resultfromStep1){
    console.log(resultfromStep1+"task 2 completed");
}
const result1=step1();
const result2=step2(result1);
console.log(result2);//output is undefined task 2 completed
