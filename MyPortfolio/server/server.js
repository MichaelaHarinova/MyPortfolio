const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
// set port, listen for requests
const PORT = 9001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
app.use(cors());

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

let items=[{name:'', content:'' , date:new Date('mm-dd-yyyy')}];


app.get("/", (request, response) => {
  response.send({ message: "Welcome to Michaela's application." });
});
app.post('/', function (request, response) {
  response.status(200).send({"message": "Data received"});
});


app.get("/items", function (request, response) {
  response.send(items);
});
app.post('/addItem', function (request, response) {
  items.push(request.body);
  response.status(200).send(items);
});
console.log(items);
app.listen(PORT, function () {});
