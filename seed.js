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
    title: 'Blood Meridian',
    description: 'Based on historical event that took place on the Texas-Mexico border in the 1850s, Blood Meridian is an epic novel that traces the fortunes of the Kid, a fourteen-year-old Tennesseean who into a nightmarish world in which the market for Indian scalps is thriving',
    status: 'read'
  });
  console.log('book1 added');
  await Books.create({
    title: 'Ficciones',
    description: 'Borges sends us on a journey into a compelling, bizarre, and profoundly resonant realm; we enter the fearful sphere of Pascal\'s abyss, the surreal and literal labyrinth of books, and the iconography of eternal return. More playful and approachable than the fictions themselves are Borges\'s Prologues, brief elucidations that offer the uninitiated a passageway into the whirlwind of Borges\'s genius and mirror the precision and potency of his intellect and inventiveness, his piercing irony, his skepticism, and his obsession with fantasy. To enter the worlds in Ficciones is to enter the mind of Jorge Luis Borges, wherein lies Heaven, Hell, and everything in between.',
    status: 'status2'
  });
  await Books.create({
    title: 'Moby Dick',
    description: ' "Call me Ishmael." Thus starts the greatest American novel. Melville said himself that he wanted to write "a mighty book about a mighty theme" and so he did. It is a story of one man\'s obsessive revenge-journey against the white whale, Moby-Dick, who injured him in an earlier meeting. Woven into the story of the last journey of The Pequod is a mesh of philosophy, rumination, religion, history, and a mass of information about whaling through the ages. ',
    status: 'status3'
  });
  mongoose.disconnect();
}

seed();
