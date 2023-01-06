const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const route = require('./routes/route');

app.use(express.json());
app.use('/user', route);

app.listen(port, () => {
  console.log(`Random User API listen on port ${port}`);
})