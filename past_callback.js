function boilWater(nextStep){
    console.log("Boiling water...");
    const step1Result="Boiled Water";
    nextStep(step1Result);
}
function addPasta(previousStepResult,nextStep){
    console.log(`Adding pasta to the ${previousStepResult}...`);
    const step2Result="Cooked pasta";
    nextStep(step2Result);
}
function drainWater(previousStepResult,nextStep){
    console.log(`Draining water from ${previousStepResult}...`);
    const step3Result="Drained the pasta";
    nextStep(step3Result);
}
function addSauceandServe(previousStepResult){
    console.log(`added sauce in ${previousStepResult} and served.`);
    const step4Result="Delicious Pasta";
    console.log("final result:"+step4Result);
}
//next step chaining (passing data)
boilWater((step1Result)=>{
    addPasta(step1Result,(step2Result)=>{
        drainWater(step2Result,(step3Result)=>{
            addSauceandServe(step3Result);
        });
    });
});// so this made complex nested loop chain so this is call calllback hell

function vikram(callback){
    setTimeout(()=>{
        console.log("task1 is completed");
        callback("100 rupees");
    },2000);
}
function abdul(previousStepResult,callback){
    setTimeout(()=>{
        conaole.log(`abdul recieved ${previousStepResult}`);
        callback("50 rupees");
    },5000);
}
function ramesh(previousStepResult){
    console.log(`finally i got my money from abdul ${previousStepResult}`);
}
vikram((moneyFromVikram)=>{
    abdul(moneyFromVikram,(moneyFromAbdul)=>{
        ramesh(moneyFromAbdul);
    });;
})