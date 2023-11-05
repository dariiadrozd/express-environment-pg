const express = require('express');
const route = express.Router();

const {getAllEnvironment} = ('../service/environment.service')

route.get('/', async(req,res)=>{
    const data = await getAllEnvironment()
    res.send(data);
})

route.get('/:id', async(req,res)=>{
    const {id} = req.params
    const data = getEnvironmentById(id)
    res.send(data)
})

module.exports = route