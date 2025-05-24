const {Client}=require('pg');
const client=new Client({
    user:'postgres',
    password:'123',
    host:'localhost',
    port:5432,
    database:'school'
});
const createTable=async()=>{
    const query=`CREATE TABLE IF NOT EXISTS students(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age>0),
    email VARCHAR(100) UNIQUE);`;
    try{
        await client.connect();
        await client.query(query);
        console.log("table created successfully");
    }
    catch(err){
        console.log('error happened',err);
    }
    finally{
        await client.end();
    }

};
createTable();