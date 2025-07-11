const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
