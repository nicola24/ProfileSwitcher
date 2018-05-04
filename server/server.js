const express = require('express');
const request = require('request');

const app = express();
const port = 3000;

app.use(express.static('dist'));

app.get('/user', (req, res) => {
  const randomNum = () => Math.floor((Math.random() * 10) + 1);

  const options = {
    url: `https://jsonplaceholder.typicode.com/users/${randomNum()}`,
  };
  request(options).pipe(res);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
