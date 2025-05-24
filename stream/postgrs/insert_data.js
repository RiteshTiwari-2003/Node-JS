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
const insertData=async()=>{
    const query=`INSERT INTO students(name,age,email) VALUES($1,$2,$3) RETURNING *`;
    const values=['Abdul',25,'abdul@gmail.com'];
    try{
        await client.connect();
        const res=await client.query(query,values);
        console.log("inserted:",res.rows[0]);
    }
    catch(err){
        console.error('error happened',err);
    }
    finally{
        await client.end();
    }
};
insertData();