const connectDB = require('./db');
const express = require('express')

connectDB();
const app = express()
const port = 3000
// respond with "hello world" when a GET request is made to the homepage
app.get('/api/v1/res', (req, res) => {
  res.send('hello world')
})
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })