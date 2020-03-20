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

  calculatePercentCorrect() {
    return 100 * (1 - (this.incorrectGuesses.length / this.guesses.length));
  }

  endRound() {
    var percentCorrect = this.calculatePercentCorrect();
    var roundEndMessage = `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`

    console.log(roundEndMessage);
    return roundEndMessage;
  }
}

module.exports = Round;