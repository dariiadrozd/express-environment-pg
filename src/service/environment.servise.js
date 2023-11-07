const { getAllEnvironmentdDb, getEnvironmentByIdDb, updateEnvironmentDB, deleteEnvironmentDB } = require('../repository/environment.repository')

async function getAllEnvironment() {
    const data = await getAllEnvironmentdDb()
    return data
}


async function getEnvironmentById(id) {
    const data = await getEnvironmentByIdDb(id)
    return data
}


async function updateEnvironment(id, label, category, priority) {
    const data = await updateEnvironmentDB(id, label, category, priority)
    if (!data.length) throw new Error('id is not found')
    return data
}

async function deleteEnvironment(id) {
    const data = await deleteEnvironmentDB(id)
    if (!data.length) throw new Error('id is not found');
    return data
}
module.exports = { getAllEnvironment, getEnvironmentById, updateEnvironment, deleteEnvironment }