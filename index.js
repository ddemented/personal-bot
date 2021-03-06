 'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()


app.set('port', (process.env.PORT || 5000))

// Process application/json
app.use(bodyParser.json())
// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))



require('./routes')(app)

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})
