const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://netninja:Parmar25@ninja.1kyy2.mongodb.net/ninja?retryWrites=true&w=majority';

mongoose.connect(dbURI)
    .then(() => console.log('connected to db'))
    .catch((err) => console.log(err));