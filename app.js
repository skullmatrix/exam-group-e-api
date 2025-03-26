const express = require('express');
const bodyParser = require('body-parser');
const examRoutes = require('./routes/exams');

const app = express();
const PORT = process.env.PORT || 1569;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/exams', examRoutes);

// Default route
app.get('/', (req, res) => {
  res.json({ message: "Group E API" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;