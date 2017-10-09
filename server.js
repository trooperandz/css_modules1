const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('src'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname +  '/src/index.html'));
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});