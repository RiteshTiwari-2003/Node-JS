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
const deleteData=async()=>{
    const query=`DELETE FROM students WHERE name=$1 RETURNING *`;
    const values=['Abdul'];
    try{
        await client.connect();
        const res=await client.query(query,values);
        console.log('deleted values',res.rows[0]);
    }
    catch(error){
        console.error('error happened',error);
    }
    finally{
        await client.end();
    }
};
deleteData();