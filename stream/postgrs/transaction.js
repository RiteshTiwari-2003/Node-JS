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
const transaction=async()=>{
    try{
        await client.connect();
        await client.query('BEGIN');
        const insertQuery=`INSERT INTO students(name,age,email) VALUES ($1,$2,$3) RETURNING *`;
        const insertValues=['Ramya',25,'bob@gmail.com'];
        const res1=await client.query(insertQuery,insertValues);
        console.log('inserted:',res1.rows[0]);
        const updateQuery=`UPDATE students SET age=$1 WHERE name=$2 RETURNING *`;
        const updateValues=[26,'Ramya'];
        const res2=await client.query(updateQuery,updateValues);
        console.log('updated:',res2.rows[0]);
        await client.query('COMMIT');
        console.log('transaction completed');
    }
    catch(error){
        await client.query('ROLLBACK');
        console.error('transaction error',error);
    }
    finally{
        await client.end();
    }
};
transaction();