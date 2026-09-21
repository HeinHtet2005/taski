const express = require('express')
const mongoose = require('mongoose')
const mongoURL = "mongodb://127.0.0.1:27017/mern-project";

mongoose.connect(mongoURL)
.then(()=>{
    console.log('Connected to database');
    app.listen(4000,()=>{
    console.log('server is running on port 4000')
})
})

const app = express()




app.get('/',(req,res)=>{
    return res.send('Hello World')
})
app.get('/api/tasks',(req,res)=>{
    return res.send('Get ALl Tasks')
})

