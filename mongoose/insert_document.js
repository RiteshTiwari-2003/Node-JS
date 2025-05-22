const mongoose=require('mongoose');
async function insertData(){
    try{
        await mongoose.connect('mongodb://localhost:27017/school',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        const studentsSchema=new mongoose.Schema({
            name:String,
            age:Number,
            subjects:Array
        });
        const StudentModels=mongoose.model("Student",studentsSchema);
        const teachersSchema=new mongoose.Schema({
            name:String,
            age:Number,
            experience:String
        });
        const TeacherModel=mongoose.model("Teacher",teachersSchema);
        await StudentModels.insertMany([
            {name:'abdul',age:10,subjects:['english','maths']},
            {name:'manoj',age:20,subjects:['english','hindi']}
        ]);
        await TeacherModel.insertOne({
            name:'vikram',age:32,experience:'5 year'
        });
    }
    catch(error){
        console.error('Error connecting to mongodb:',error);
    }
    finally{
        await mongoose.disconnect();
    }
}
insertData();