const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Snippet = require('./models/schema.js');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/snippets');

const app = express();
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.render('index');
})

app.get('/mysnippets', function (req, res) {
  res.render('index');
})

app.get('/create', function (req, res) {
  res.render('create');
})

app.get('/edit', function (req, res) {
  res.render('index');
})

app.get('/search', function (req, res) {
  res.render('index');
})

app.listen(3000, function() {
  console.log('Ciao');
})
