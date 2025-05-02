function vikram(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("task 1 is completed");
            resolve();
        },1000);

    });
}
function abdul(){
    console.log("task2 is completed");
    return promise;
}
function ramesh(){
    console.log("Buy saree to mom");
}
vikram().then(abdul).then(ramesh);;
//promise look like object 
// {
//     "then":(callback)=>{
//         callback

//     }
// }
function boilWater(){
    return new Promise((resolve)=>{
        console.log("Step1: water is boiled");
        resolve("boiled water");
    });
}
function addpasta(previousStepResult){
    return new Promise((resolve)=>{
        console.log(`step2: pasta is added to ${previousStepResult}`);
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
        console.log(`step4: added sauce to ${previousStepResult} and serve to`);
        resolve("delicious pasta");

    });
}
//callback hell approach
boilWater((boiledWater)=>{
    addpasta(boiledWater,(cookedPasta)=>{
        drainWater(cookedPasta,(drainedPasta)=>{
            addSauceAndServe(drainedPasta,(finalDish)=>{
                console.log(`final result is :${finalDish}`);
            })
        })
    })
})
//chaining promise 
boilWater().then(addpasta).then(drainWater).then(addSauceAndServe).then((finalDish)=>{
    console.log(`final dish is ${finalDish}`);
})