const express = require('express')
const cookieParser = require('cookie-parser')
const routes = require('./routes/routes.js')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
mongoose.set("strictQuery", true);
require('custom-env').env('staging')

const uri = process.env.ACCESS_DATASTORAGE

mongoose.connect(uri).then((res) => {
    console.log("db is conected")
    app.listen(3001, function () {
        console.log("listen port 3001")
    })
})

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

