//https://nodejs.org/api/path.html#path_path_join_paths

const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
//use http server instead of express
var server = http.createServer(app);

//access to socket.io
var io = socketIO(server);
io.on('connection', (socket) => {
    console.log('new user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});






app.use(express.static(publicPath));

server.listen(port, () => {
    console.log('Server up and running in port', port);
});

