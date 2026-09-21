const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const mongoURL = "mongodb://127.0.0.1:27017/mern-project";
const taskRoutes = require('./routes/tasks')
const userRoutes = require('./routes/users');

mongoose.connect(mongoURL)
.then(()=>{
    console.log('Connected to database');
    app.listen(4000,()=>{
    console.log('server is running on port 4000')
})
}).catch(err=>{
    console.log(err)
})

const app = express()
app.use(morgan("dev"));
app.use(cookieParser())
app.use(express.json());
app.get('/',(req,res)=>{
    return res.send('Hello World')
})
app.use('/api/tasks',taskRoutes)
app.use('/api/users',userRoutes)
