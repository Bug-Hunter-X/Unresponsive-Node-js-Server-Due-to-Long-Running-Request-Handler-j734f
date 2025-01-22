const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  // Simulate an asynchronous operation using a Promise
  try {
    const result = await new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello from Express!');
      }, 5000);
    });
    res.send(result);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});