const LetterEmitter = require('./LetterEmitter');

describe('custom emitter', () => {
  let le;
  beforeEach(() => {
    le = new LetterEmitter();
  });

  it('it emits the end event', done => {
    const str = 'hello';
    le.on('end', () => {
      done();
    });
  });
  

});
