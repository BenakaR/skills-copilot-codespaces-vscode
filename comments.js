// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments
const comments = require('./comments');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});