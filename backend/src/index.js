const server = require('express')();
const cors = require('cors');

server.use(require('express').json()); // use JSON middleware
server.use(cors()); // use cors for fuck sake.

// Import mongoose.
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/database');

const userAddHandler = require('./routes/add');
const userRemoveHandler = require('./routes/remove');
const userUpdateHandler = require('./routes/update');
const userListHandler = require('./routes/list');

server.use('/users/add', (req, res) => userAddHandler(req, res));
server.use('/users/remove', (req, res) => userRemoveHandler(req, res));
server.use('/users/update', (req, res) => userUpdateHandler(req, res));
server.use('/users/list', (req, res) => userListHandler(req, res));

server.listen(6969, () => {
    console.log('Started backend server.');
});