const express = require('express');
const app = express();

const dogs = [
  { name: 'spot', age: 5, weight: '20lbs' },
  { name: 'rover', age: 3, weight: '15lbs' },
  { name: 'scooter', age: 6, weight: '10lbs' },
];

app.use(express.static('./http/public'));

app.get('/dogs', (req, res) => {
  res.send(dogs);
});

module.exports = app;
