const express = require('express');
const route = express.Router();

const { getAllEnvironment, getEnvironmentById ,updateEnvironment, deleteEnvironment } = require('../service/environment.servise')
const {isValidEnvironmentId,isValidBody} = require('../helper/validation')

route.get('/', async (req, res) => {
    const data = await getAllEnvironment()
    res.send(data);
})

route.get('/:id', async (req, res) => {
    const { id } = req.params
    const data = await getEnvironmentById(id);
    res.send(data)
})

route.put('/:id', async(req,res)=>{
    try{
        const {id} = req.params
        const {label,category, priority} = req.body
        const data = await updateEnvironment(id,label,category, priority)
        res.send(data)
    }catch(error){
        res.send(error.message)
    }
})

route.delete('/:id', async(req,res)=>{
    try{
const {id} = req.params;
const data = await deleteEnvironment(id)
res.send(data)
    }catch(error){
res.send(error.message)
    }
})


module.exports = route