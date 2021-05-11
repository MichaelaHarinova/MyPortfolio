const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");

let corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
// set port, listen for requests
const PORT = 9001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

let items=[{placeName:'Scandinavia', plan:'Ship course' , date:new Date('01-06-2023')}];


app.get("/", (request, response) => {
  response.send({ message: "Welcome to Michaela's application." });
});
app.post('/', function (request, response) {
  response.status(200).send({"message": "Data received"});
});


app.get('/items', function (request, response) {
  response.send(items);
});
app.post('/addItems', function (request, response) {
  items.push(request.body);
  response.status(200).send(items);
});

app.listen(PORT, function () {});
