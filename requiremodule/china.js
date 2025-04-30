const allImports=require("./india.js");
//console.log(allImports);
allImports.carfunc();

// so one question is how to find main file for run in india.js and china.js then in main file we import the thing 
// so i can say that china.js is main file so run the node china.js
/**even though when  i want to buy china mobile then i can not directly import from india first before import only when china export it only that time we can import it 
 * so export is the first thing that has to happen 
 * 
 * 2nd case : like one caseis about that china want to export many thing but india want to import only some thing like china want to export 
 * potatao but india already made production of potato same like for toys so for this we use destructuring like 
 * 
 * in china.js file i only want to import phones from them then we can write like this 
 * 
 * const {phones}=require("./india.js")
 * console.log(phones);
 * 
 * default 
 * like what is default import like when we write like this 
 * const vikram=require("./india.js")
 * console.log(vikram); // then in this all export things store into vikram this is called as default import 
 * 
 * 
 */