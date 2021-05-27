const express = require('express');
const app = express()
const port = 3000
var path = require('path')
app.use(express.static('/public'))

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'))
})

app.get('/bundle', (req,res) => {
  res.sendFile(path.resolve(__dirname, './public/dist/bundle.js'))
})


app.listen(port, () => {console.log(`server running on port ${port}`)})

