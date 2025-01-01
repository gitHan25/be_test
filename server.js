const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the login page
app.get('/tes.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tes.html'));
});

// Route to serve the dashboard page
app.get('/dashboard.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Route to serve the admin page
app.get('/admin.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Route to serve the add food consumption page
app.get('/add-food-consumption.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'add-food-consumption.html'));
});

// Route to serve the edit food consumption page
app.get('/edit-food-consumption.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'edit-food-consumption.html'));
});

// Route to serve the add schedule page
app.get('/add-schedule.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'add-schedule.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});