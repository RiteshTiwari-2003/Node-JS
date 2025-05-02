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