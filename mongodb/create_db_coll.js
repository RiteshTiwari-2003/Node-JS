// creating mongodb database and collection using native library mongodb
const {MongoClient}=require('mongodb');
const uri='mongodb://localhost:27017';
const client=new MongoClient(uri);
async function createDBandCollection(){
    try{
        await client.connect();
        const db=client.db('school');
        await db.createCollection('students');
        await db.createCollection('teachers');
        await db.createCollection('teachers');

    }
    finally{
        await client.close();
    }
}
createDBandCollection();