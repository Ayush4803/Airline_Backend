const express = require('express');
const dotenv = require('dotenv');

// Load environment variables first
dotenv.config();

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const routes = require('./src/routes'); // routes inside src/

// Mount routes
app.use('/', routes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});
