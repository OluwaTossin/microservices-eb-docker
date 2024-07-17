const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Service 1');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Service 1 running on port ${port}`);
});
