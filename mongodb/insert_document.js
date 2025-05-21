const {MongoClient}=require('mongodb');
const uri='mongodb://localhost:27017';
const client=new MongoClient(uri);
async function insertDocument(){
    try{
        await client.connect();
        const db=client.db('school');
        const students=db.cllection('students');
        const teachers=db.collection('teachers');
        await students.insertMany([
            {name:'abdul',age:20,subjects:['math','english']},
            {name:'manoj',age:30,subjects:['hindi','computer']}
        ]);
        await teachers.insertOne({name:'suresh',age:40,experience:"9 years"});
    }
    finally{
        await client.close();
    }
}
insertDocument();