const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaName = new Schema({
    platform: [
        {
            x: Number,
            y: Number,
            w: Number,
            h: Number
        }
    ]
});

const Model = mongoose.model('GameLevel', schemaName);
module.exports = Model;