const path = require('path');
const express = require('express');
// create express application
const app = express();
const publicPath = path.join(__dirname, '../', 'public');

// for haruki
const port = process.env.PORT || 3000;

// use public directory to serve static assets
app.use(express.static(publicPath));

// if request is in public folder, get back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// start on port 3000
app.listen(port, () => {
    console.log('Server is up!');
});

//command: node server/server.js