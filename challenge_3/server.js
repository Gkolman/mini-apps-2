const express = require('express');
const app = express();
const port = 5000;

app.use(express.static(__dirname + '/public'));

// app.get('/', (req,res) => {
//   res.sendFile(__dirname + './')
// })
app.listen(port, () => {console.log(`listening on port ${port}`)});