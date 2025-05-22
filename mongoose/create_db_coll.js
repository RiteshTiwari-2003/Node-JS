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
/**for every collection 
 * step 1 : create schema 
 * step 2; create model 
 * i will try to create schema objet and after creating schema object we will pass the schema object to the model 
 * and for every collection like insertion deletion updation  i will do thing on model student modelor any model do validation internally 
 * 
 */