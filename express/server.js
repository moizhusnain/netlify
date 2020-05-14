'use strict';

// Imports
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

// Create Expreess Object
const app = express();

// Create a router
const router = express.Router();

// Main Index Route
router.get('/', (req, res) => {
    // Send response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello from Express.js!</h1>');
    res.end();
});

// Another route which will will just
// respond with a json object of route url
router.get('/url', (req, res) => res.json({ route: req.originalUrl }));

// Use body parser
app.use(bodyParser.json());

// and use the router defined above
app.use('/api', router);  // path must route to lambda

// Export app
module.exports = app;

// and handler
module.exports.handler = serverless(app);