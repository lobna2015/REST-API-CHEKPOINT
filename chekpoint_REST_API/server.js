const express = require('express')

const app = express()
require('dotenv').config({path : './config/env'})

app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://lobna:lobna@rest-api.uhvqu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',(err)=>(
err ? console.log(err) : console.log('data base connectee')))

app.use('/api/user',require('./routes/userRoutes'))




app.listen(5000,()=>console.log('listening on port 5000'));