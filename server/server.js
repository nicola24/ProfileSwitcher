const express = require('express');
const request = require('request');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('dist'));

const randomNum = () => Math.floor((Math.random() * 10) + 1);

app.get('/user', (req, res) => {
  const options = {
    url: `https://jsonplaceholder.typicode.com/users/${randomNum()}`,
  };
  request(options).pipe(res);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
