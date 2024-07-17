const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Service 2');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Service 2 running on port ${port}`);
});
