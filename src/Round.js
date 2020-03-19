const Turn = require('../src/Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.guesses = [];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(playerGuess) {
    let currentCard = this.returnCurrentCard();
    let turn = new Turn(playerGuess, currentCard);
    
    this.guesses.push(playerGuess);

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id);
    }

    this.turns++;
    return turn.giveFeedback();
  }

}

module.exports = Round;