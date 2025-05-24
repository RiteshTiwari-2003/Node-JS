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
const updateData=async()=>{
    const query=`UPDATE students SET age=$1 WHERE name=$2 RETURNING *`;
    const values=[26,'ABdul'];
    try{
        await client.connect();
        const res=await client.query(query,values);
        console.log('updating values',res.rows[0]);
    }
    catch(error){
        console.error('error happended',error);
    }
    finally{
        await client.end();
    }
};
updateData();