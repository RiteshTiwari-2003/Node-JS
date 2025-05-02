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