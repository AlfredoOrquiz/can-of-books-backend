'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const Books = require('./models/books.js');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

mongoose.connect(process.env.DB_URL);

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/test', (request, response) => {

  response.send('test request received')

});

app.get('/books', getBooks);
async function getBooks(req, res, next) {
  try {
    let results = await Books.find();
    res.status(200).send(results);
  } catch (err) {
    next(err);
  }
};

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
