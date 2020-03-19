const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

let turn;

describe('Turn', ()  => {

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be instantiated with guess and a card', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    const turn = new Turn('pug', card);

    expect(turn.card).to.equal(card);
    expect(turn.guess).to.equal('pug', card);
  });

  it('should return the user guess', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should return a card', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    
    const turn = new Turn('pug', card)
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate whether the guess is true or false', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    
    const turn = new Turn('pug', card);

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should tell the user if the guess is incorrect', () => {

    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    
    const turn = new Turn('pug', card);
    expect(turn.giveFeedback()).to.equal('incorrect');
  });

  it('should tell the user if the guess is correct', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    
    const turn = new Turn('sea otter', card);
    expect(turn.giveFeedback()).to.equal('correct');
  });
})