const express = require('express');
const app = express();
const port = 3000;
const pug = require('pug');
const compiledFunction = pug.compileFile('template.pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(compiledFunction({
    title: 'Hello World'
  }))
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
