// define dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');
const session = require('express-session'); //we're using 'express-session' as 'session' here
const bcrypt = require("bcrypt"); // 
const app = express();
const PORT = 3000; // you can change this if this port number is not available

//connect to database
mongoose.connect('mongodb://172.17.0.2:27017/planning_db', {
  autoIndex: false,
  }, (err, db) => {
    if (err) {
      console.log("Couldn't connect to database");
    } else {
      console.log("Connected To Database");
    }
  }
);

// define database schemas
const event = require('./models/event'); 

// configure bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(
  session({
    secret: "hdjjfhhakjhbzbdkirtxkdbhfhbvhc18277384", //in production save that in a config file
    resave: true,
    saveUninitialized: false
  })
);
app.use(express.static('public'));

/*app.get('/', (req, res) => {
  res.send('Welcome to the Home of our APP');
   
});*/
app.use('/', express.static(__dirname + 'index.html'));

app.listen(PORT, () => {
  console.log(`app running port ${PORT}`)
});
