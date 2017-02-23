var express = require('express')
var app = express()
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(book_list.html);
});

app.get('/users/:id/:alias', function (req, res) {
  res.send({
  	"id": req.params.id, // get from route
  	"alias": req.params.alias,
  	"name":"mini",
  	"age":24
  });
});

app.get('/products', function (req, res) {
  res.send({
  	"max": req.query.max, // get params from query string
  	"min": req.query.min
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port.');
});