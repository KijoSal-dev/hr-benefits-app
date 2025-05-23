const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Define a route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/employee-portal.html'));
});

// ...existing code...
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
// ...existing code...
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/hr-portal.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});