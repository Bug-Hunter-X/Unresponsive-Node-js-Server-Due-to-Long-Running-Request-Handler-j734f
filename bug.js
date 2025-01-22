const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    res.send('Hello from Express!');
  }, 5000); // Simulate a 5-second delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Problem: The server may become unresponsive during the 5-second delay if many requests come in quickly. Node.js is single-threaded, so the server cannot handle other requests while processing this one. 