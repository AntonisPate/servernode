var express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const taskRouter = require('./routes/tasks')
const jwtutil = require('./utils/authenticateToken')
require('dotenv').config()

mongoose.connect('mongodb://localhost:27017/'+  process.env.DB_NAME || 'test')

var app = express();

app.use(bodyParser.json())
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/task', jwtutil.authenticateToken, taskRouter);

app.get('/', function (req, res) {
  const token = jwtutil.generateAccessToken()
  res.json(token);
})

app.listen(app.get('port'), () => {
  console.log(`Example app listening at http://localhost:${app.get('port')}`)
})