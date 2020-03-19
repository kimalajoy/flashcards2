const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

let round;

describe('Round', ()  => {

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  })


});