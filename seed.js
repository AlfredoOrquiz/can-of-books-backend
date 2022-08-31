'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Books = require('./models/books.js');


async function seed() {
  await Books.create({
    title: 'Hackers',
    description: 'Steven Levy\'s classic book traces the exploits of the computer revolution\'s original hackers - those brilliant and eccentric nerds from the late 1950s through the early \'80s who took risks, bent the rules, and pushed the world in a radical new direction. With updated material from noteworthy hackers such as Bill Gates, Mark Zuckerberg, Richard Stallman, and Steve Wozniak, Hackers is a fascinating story that begins in early computer research labs and leads to the first home computers.',
    status: 'Reading'
  });
  console.log('book added');
  await Books.create({
    title: 'Don Quijote',
    description: 'Don Quixote has become so entranced reading tales of chivalry that he decides to turn knight errant himself. In the company of his faithful squire, Sancho Panza, these exploits blossom in all sorts of wonderful ways. While Quixote\'s fancy often leads him astray—he tilts at windmills, imagining them to be giants—Sancho acquires cunning and a certain sagacity. Sane madman and wise fool, they roam the world together-and together they have haunted readers\' imaginations for nearly four hundred years.',
    status: 'Want To Read'
  });
  await Books.create({
    title: 'Moby Dick',
    description: ' "Call me Ishmael." Thus starts the greatest American novel. Melville said himself that he wanted to write "a mighty book about a mighty theme" and so he did. It is a story of one man\'s obsessive revenge-journey against the white whale, Moby-Dick, who injured him in an earlier meeting. Woven into the story of the last journey of The Pequod is a mesh of philosophy, rumination, religion, history, and a mass of information about whaling through the ages. ',
    status: 'Read'
  });
  mongoose.disconnect();
}

seed();
