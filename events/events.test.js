const EventEmitter = require('events');

describe('Events', () => {
  it('emits and listens to events', done => {
    const ee = new EventEmitter();
    ee.on('we did it', () => {
      done();
    });
    ee.emit('we did it');
  });

  it('emits and listens to events with data', done => {
    const ee = new EventEmitter();
    ee.on('newDog', dog => {
      expect(dog).toEqual({
        name: 'rus',
        age: 5
      });
      done();
    });

    ee.emit('newDog', {
      name: 'rus',
      age: 5
    });
    
  });

  it('splits string into letters', () => {
    
  });
});
