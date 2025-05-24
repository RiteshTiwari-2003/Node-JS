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
const selectData=async()=>{
    const query=`SELECT * FROM students`;
    try{
        await client.connect();
        const res=await client.query(query);
        console.log("seected data:",res.rows);
    }
    catch(error){
        console.error('error happended',error);
    }
    finally{
        await client.end();
    }
};
selectData();