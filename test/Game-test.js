const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

let game;

describe('Game', () => {
  beforeEach(() => {
    game = new Game;
  });

  it.skip('Should be a function', () => {
    expect(Game).to.be.a('function');
  })

  it.skip('should be an instance of game', () => {
    expect(game).to.be.an.instance.of(Game)
  })

  it.skip('should print a message to the console')


})