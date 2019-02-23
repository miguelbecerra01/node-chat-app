//https://nodejs.org/api/path.html#path_path_join_paths

const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));





app.listen(port, () => {
    console.log('Server up and running in port', port);
});

