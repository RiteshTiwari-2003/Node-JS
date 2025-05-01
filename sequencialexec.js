function boilWater(){
    console.log("Boiling water...");
    const step1Result="Boiled Water";
    return step1Result;
}
function addPasta(previousStepResult){
    console.log(`Adding pasta to the ${previousStepResult}...`);
    const step2Result="Cooked pasta";
    return step2Result;
}
function drainWater(previousStepResult){
    console.log(`Draining water from ${previousStepResult}...`);
    const step3Result="Drained the pasta";
    return step3Result;
}
function addSauceandServe(previousStepResult){
    console.log(`added sauce in ${previousStepResult} and served.`);
    const step4Result="Delicious Pasta";
    return step4Result;
}
// sequential execution 
const boiledWater=boilWater();
const cookedPasta=addPasta(boiledWater);
const drainedpasta=drainWater(cookedPasta);
const finalDish=addSauceandServe(drainedpasta);
console.log(`final dishg is ${finalDish}`);