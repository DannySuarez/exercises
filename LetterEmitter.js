const EventEmitter = require('events');

class LetterEmitter extends EventEmitter {
  constructor(arr) {
    super();
    this.arr = arr;
  }

  read(str) {
    str
      .split('')
      .forEach((letter, index) => {
        this.emit('letter', { letter, index });
        if(this.arr.includes(letter)) {
          this.emit(letter);
        }
      });
    
    this.emit('end');
  }
}

class IterattorEmittr extends EventEmitter {
  iterate(arr) {
    arr.forEach(item => {
      this.emit('item', item);
    });

    this.emit('end');
  }
}

module.exports = { IterattorEmittr, LetterEmitter };
