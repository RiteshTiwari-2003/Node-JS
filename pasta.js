function boiledWater(){
    return new Promise((resolve)=>{
        console.log("step1; water is boiled");
        resolve("boiled water");
    });
}
function addpasta(previousStepResult){
    return new Promise((resolve)=>{
        console.log(`step2; added pasta to ${previousStepResult}`);
        resolve("cooked pasta");
    });

}
function drainWater(previousStepResult){
    return new Promise((resolve)=>{
        console.log(`step3: drained water from ${previousStepResult}`);
        resolve("drained pasta");
    });
}
function addSauceAndServe(previousStepResult){
    return new Promise((resolve)=>{
        console.log(`added sauce to ${previousStepResult} and serve`);
        resolve('delicious pasta');
    });
}
async function makePasta(){// when you use async keyword then understand its opposite that it is a synchronous function it is runnning in synchronous way
    /**to async keyword work you should need promise implementation of each step each function , each step should return promise ,
     * but why use await not just cause of async keyword every keyword which return promise in that function use await 
     * you can not use await wain you not use async function ,
     * await measn waiting for the promise resolve by resolve() function 
     */
    try{
        const boiledWater=await boiledWater();
        const cookedPasta=await addpasta(boiledWater);
        const drainedPasta=await drainWater(cookedPasta);
        const finalDish=await addSauceAndServe(drainedPasta);
        console.log(`final dish is ${finalDish}`);
    }
    catch(error){
        console.log("an error occured",error);
    }
}
makePasta();