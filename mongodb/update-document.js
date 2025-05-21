const {MongoClient}=require('mongodb');
const uri='mongodb://localhost:27017';
const client=new MongoClient(uri);
async function updateData(){
    try{
        await client.connect();
        const db=client.db('school');
        const students=db.collection('students');
        const result=await students.updateOne({
            name:'abdul'
        },
    {$set:{age:19}});
    console.log(result);
    }
    finally{
        await client.close();
    }
}
updateData();
/**if we want to update many data like all those data which age is greater than or equal to 15 set the age 19
 * 
 * const result=await students.updateMany({
            age:{$gte:15}
        },
    {$set:{age:100}});
 */