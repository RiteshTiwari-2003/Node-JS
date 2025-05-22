const mongoose=require('mongoose');
async function findData(){
    try{
        await mongoose.connect('mongodb://localhost:27017/school',
            {
                useNewUrlParser:true,
                useUnifiedTopology:true
            }
        );
        const studentSchema=new mongoose.Schema({
            name:String,
            age:Number,
            subjects:Array

        });
        const StudentModel=mongoose.model('Student',studentSchema);
        const result=await StudentModel.find({age:{$gte:10}}).lean();// lean means i want it as a object 
        console.log(result);
    }
    catch(error){
        console.error('Error connecting to mongodb:',error);
    }
    finally{
        await mongoose.disconnect();
    }
}
findData();