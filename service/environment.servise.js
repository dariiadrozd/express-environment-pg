const { getAllEnvironmentdDb, getEnvironmentByIdDb } = require('../repository/environment.repository')

async function getAllEnvironment() {
    const data = await getAllEnvironmentdDb(id)
    return data
}


async function getEnvironmentById() {
    const data = await getEnvironmentByIdDb(id)
    return data
}
module.exports = { getAllEnvironment, getEnvironmentById }