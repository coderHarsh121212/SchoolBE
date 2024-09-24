const mongoose = require('mongoose');

const CourseFeeSchema = new mongoose.Schema({
  courseFee: Number,
});

module.exports = mongoose.model('CourseFee', CourseFeeSchema);
