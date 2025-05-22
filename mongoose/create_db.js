const mongoose=require('mongoose');
const uri='mongodb://localhost:27017/school';
async function connectDB(){
    try{
        await mongoose.connect(uri,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('connected to mongodb');
    }
    catch(error){
        console.error('Error connecting to mongodb:',error);
    }
    finally{
        await mongoose.disconnect();
    }
}
connectDB();
