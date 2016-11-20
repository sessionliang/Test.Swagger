const Model = require('../../lib/facade');
const studentSchema = require('./student-schema');

class StudentModel extends Model{}

module.exports = new StudentModel(studentSchema);