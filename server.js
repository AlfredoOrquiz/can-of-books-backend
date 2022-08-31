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
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/test', (request, response) => {

  response.send('test request received')

});

app.get('/books', getBooks);
app.post('/books', postBooks);
app.delete('/books/:id', deleteBooks);

async function getBooks(req, res, next) {
  try {
    let results = await Books.find();
    res.status(200).send(results);
  } catch (err) {
    next(err);
  }
};

async function postBooks(req, res, next) {
  console.log(req.params.id);
  try {
    let createdBooks = await Books.create(req.body)
    res.status(200).send('Book Created');
  } catch (err) {
    next(err);
  }
};

async function deleteBooks(req, res, next) {
  try {
    await Books.findByIdAndDelete(req.params.id);
    res.status(200).send('Book Deleted');
  } catch (err) {
    next(err);
  }
};

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});


app.listen(PORT, () => console.log(`listening on ${PORT}`));
