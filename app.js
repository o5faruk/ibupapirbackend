const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ibuapibackend', { useNewUrlParser: true })

app.use(express.json())

const routes = require('./api/routes')(app)
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})