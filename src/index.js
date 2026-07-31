const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static frontend from /public
app.use(express.static(path.join(__dirname, '..', 'public')));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Sample games endpoint
app.get('/api/games', (req, res) => {
  res.json([
    { id: 1, name: 'Catan', players: '3-4' },
    { id: 2, name: 'Carcassonne', players: '2-5' }
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
