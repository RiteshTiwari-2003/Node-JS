const mongoose=require('mongoose');
async function createSchemaAndModel(){
    try{
        await mongoose.connect('mongodb://localhost:27017?school',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        const studentSchema=new mongoose.Schema({
            name:String,
            age:Number,
            subjects:Array
        });
        const studentModel=mongoose.model('Student',studentSchema);
        const teachersSchema=new mongoose.Schema({
            name:String,
            age:Number,
            experience:String
        });
        const teacherModel=mongoose.model('Teacher',teachersSchema);
    }
    finally{
        await mongoose.disconnect();
    }

}
createSchemaAndModel();