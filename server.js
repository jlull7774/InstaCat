const express = require('express');
const path = require('path')
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express()

app.use(logger('dev'))
// body parser middleware - adds properties to req.body
app.use(express.json())
// Configure both serve-favicon & static
// middleware to server from the 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Configure express app to listen on port 3001
// to avoid conflicting with the react server
const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})