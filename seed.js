'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Books = require('./models/books.js');


async function seed() {
  // title: { type: String, require: true },
  // description: { type: String, require: true },
  // status: { type: String, require: true }
  await Books.create({
    title: 'book1',
    description: 'desc1',
    status: 'status1'
  });
  console.log('book1 added');
  await Books.create({
    title: 'book2',
    description: 'desc2',
    status: 'status2'
  });
  await Books.create({
    title: 'book3',
    description: 'desc3',
    status: 'status3'
  });
  mongoose.disconnect();
}

seed();
