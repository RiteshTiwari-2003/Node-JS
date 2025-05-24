const {Client}=require('pg');
const client=new Client(
    {
        user:'postgres',
        password:'123',
        host:'localhost',
        port:5432,
        database:'school'
    }
);
async function connectDB(){
    try{
        await client.connect();
        console.log('Connected to postgres database ');
    }
    catch(err){
        console.log('error happened',err);
    }
    finally{
        await client.end();
    }
}
connectDB();