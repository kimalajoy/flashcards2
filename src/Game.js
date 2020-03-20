const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  start() {
    this.start = new Date();
    
    this.deck = new Deck(this.createCards());
    this.round = new Round(this.deck);

    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);

    this.currentRound++;
  }

  createCards() {
    let cards = [];
    prototypeQuestions.forEach((question) => {
      cards.push(question)
    })
    return cards
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
  
}

module.exports = Game;