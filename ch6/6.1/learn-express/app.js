const express = require('express');
const path = require('path');

const app = express();

/**
 * app.set() : 전역변수 같은 느낌으로 이해하면 된다
 */
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  // res.send('Hello, Express');
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', (req, res) => {
  res.send('hello express');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
