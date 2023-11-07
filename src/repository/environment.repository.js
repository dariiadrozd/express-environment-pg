const pool = require('../db');

async function getAllEnvironmentdDb() {
    const client = await pool.connect();
    const sql = 'select * from environment'
    const result = (await client.query(sql)).rows
    return result;
}

async function getEnvironmentByIdDb(id) {
    const client = await pool.connect()
    const sql = 'select * from environment where id = $1'
    const result = (await client.query(sql, [id])).rows
    return result
}

async function updateEnvironmentDB(id, label, category, priority) {
    const client = await pool.connect();
    const sql = `update environment set label =$1, category =$2, priority =$3
    where id= $4 returning *`;
    const result = (await client.query(sql, [label, category, priority, id])).rows
    return result
}

async function deleteEnvironmentDB(id) {
    const client = await pool.connect();
    const sql = `delete from environment where id =$1
    returning *`;
    const result = (await client.query(sql, [id])).rows
    return result;

}

module.exports = { getAllEnvironmentdDb, getEnvironmentByIdDb, updateEnvironmentDB, deleteEnvironmentDB }