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

  it('should update the turn count', () => {
    expect(round.turns).to.equal(0);

    round.takeTurn('a');
    round.takeTurn('b');
    round.takeTurn('c');

    expect(round.turns).to.equal(3);
  });

});