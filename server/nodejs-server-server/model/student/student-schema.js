const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    id: Schema.ObjectId,
    userName: { type: String, require: true },
    password: { type: String, require: true },
    name: { type: String },
    email: { type: String },
    phone: { type: String }
});

module.exports = mongoose.model('student', studentSchema);