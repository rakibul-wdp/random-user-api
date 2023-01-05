const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const routes = require('./routes/route');

app.use('/user', routes);

app.listen(port, () => {
  console.log(`Random User API listen on port ${port}`);
})