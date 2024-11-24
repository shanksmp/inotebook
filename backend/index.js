const connectDB = require('./db');
const express = require('express')

connectDB();
const app = express()
const port = 3000
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })