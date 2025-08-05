const mongoose = require('mongoose');
const Module = require('node:module');
mongoose.connect('mongodb:///localhost:27017//workshop')
    .then(()=>{
    console.log('Database Connection Successful');
});

module.exports = mongoose;
