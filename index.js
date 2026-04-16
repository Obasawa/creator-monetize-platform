// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Middleware for parsing request bodies

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
mongoose.connect('mongodb://localhost:27017/creator-monetize-platform', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// API Routes Initialization (Placeholder)
app.get('/api', (req, res) => {
    res.send('API is working');
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
