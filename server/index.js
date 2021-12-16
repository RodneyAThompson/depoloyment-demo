const express = require('express')
const path = require('path')

// include and initialize the rollbar library with your access token
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'bb477fb22ab842ecad156629994fbb41',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

const app = express()



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'))
    rollbar.info('html field served successfully')
})

app.get('/css', function(req, res) {
    res.sendFile(path.join(__dirname, '../style.css'))
    rollbar.info('html field served successfully')
})

app.use(rollbar.errorHandler())
const port = process.env.PORT || 4005 

app.listen(port, () => {console.log(`Avengers assemble... on port ${port}.`)})