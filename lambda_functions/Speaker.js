const mongoose = require('mongoose');

const speaker_schema = new mongoose.Schema({
    _id: String
}, { collection: 'teds_data' });

module.exports = mongoose.model('talk', speaker_schema);
