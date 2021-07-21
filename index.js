//Load HTTP module
const express = require('express')
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 8000;

app.use(cors())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});
app.get('/links.js', function(req, res){
  res.sendFile(__dirname + '/links.js');
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
});