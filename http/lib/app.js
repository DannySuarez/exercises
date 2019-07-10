const express = require('express');
const app = express();


app.use(express.static('./public'));
// app.get('./api/v1/dog', (req, res) => {
//   res.send({ name: 'spot', age: 5, weight: '20lbs' });
// });

module.exports = app;
