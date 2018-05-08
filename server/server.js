const express = require('express');
const request = require('request');

const app = express();
const port = 3000;

app.use(express.static('dist'));

const randomNum = () => Math.floor((Math.random() * 10) + 1);

app.get('/user', (req, res) => {
  const options = {
    url: `https://jsonplaceholder.typicode.com/users/${randomNum()}`,
  };
  request(options).pipe(res);
});

// app.get('/user/photo', (req, res) => {
//   const options = {
//     url: `https://reqres.in/api/users/${randomNum()}`,
//   };
//   request(options).pipe(res);
// });

app.listen(process.env.PORT || port, () => console.log(`App listening on port ${port}!`));
