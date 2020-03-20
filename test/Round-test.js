const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

let round;
let deck;
let card1, card2, card3;

describe('Round', ()  => {
  
  beforeEach(() => {

    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck([card1, card2, card3])
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the card currently being played', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should make the next card become the current card to play', () => {
    round.takeTurn('sea otter');
    expect(round.returnCurrentCard()).to.equal(card2)
  })

  it('should update the turn count', () => {
    expect(round.turns).to.equal(0);

    round.takeTurn('a');
    round.takeTurn('b');
    round.takeTurn('c');

    expect(round.turns).to.equal(3);
  });

  it('should record the current guess value', () => {
    round.takeTurn('a');
    expect(round.guesses[0]).to.equal('a');
  });

  it('should record that a guess has been made', () => {
    expect(round.guesses.length).to.equal(0);
    round.takeTurn('a');
    expect(round.guesses.length).to.equal(1);
  });

  it('should know if the guess is correct', () => {
    expect(round.guesses.length).to.equal(0);
    round.takeTurn('sea otter');
    expect(round.incorrectGuesses.length).to.equal(0);
  });

  it('should return feedback for a correct guess', () => {
    let feedback = round.takeTurn('sea otter');
    expect(feedback).to.equal('correct');
  });

  it('should return feedback for an incorrect guess', () => {
    let feedback = round.takeTurn('pug');
    expect(feedback).to.equal('incorrect');
  });

  it('should calculate the percent of correct guesses', () => {
    round.takeTurn('sea otter');
    expect(round.calculatePercentCorrect()).to.equal(100);
  });

  it('should show the player the percent they got correct at the end of the round', () => {
    round.takeTurn('sea otter');
    expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!');
  });

});