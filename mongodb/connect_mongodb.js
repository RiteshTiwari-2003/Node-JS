const {MongoClient}=require("mongodb");
const uri='mongodb://localhost:27017';
const client=new MongoClient(uri);
async function connectDB(){
    try{
        await client.connect();
        console.log("connected to database");
    }
    catch(error){
        console.error('connection failed',error);
    }
    finally{
        await client.close();
    }
}// you need to first install mongo db like npm install mongodb and npm install mongoose 
connectDB(); 