const fs = require('fs');

const readStream = fs.createReadStream('streams/text.txt', 'utf8');
const createStream = fs.createWriteStream('streams/copy-text.txt');

const createStream2 = fs.createWriteStream('streams/text2.txt');

readStream.on('data', file => {
  console.log(file);
});

createStream2.write('i think this will work?');

readStream.on('data', file => {
  createStream.write(file);
});

readStream.on('end', () => {
  createStream.end();
});


readStream.pipe(createStream);
