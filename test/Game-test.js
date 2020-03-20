const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

let game;
let round;


describe('Game', () => {
  beforeEach(() => {
    game = new Game();
    // round = new Round(deck);
  });

  it('Should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of game', () => {
    expect(game).to.be.an.instanceof(Game)
  });

  it.skip('should keep track of the current round', () => {
    expect(game.currentRound).to.equal(0)
    console.log('0', game.currentRound)
    
    game.start();
    game.round.takeTurn('sea otter');
    console.log('took turn', game)
    expect(game.currentRound).to.equal(1)
    console.log('1', game.currentRound)
  });

  it('should create cards', () => {
    expect(game.createCards().length).to.equal(30);
  });


})