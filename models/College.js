const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
  name: String,
  courseName: String,
  duration: String,
  accommodation: {
    type: String,
    enum: ['AC', 'Non-AC'],
  },
  accommodationFee: Number,
  courseFee: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseFee' },
});

module.exports = mongoose.model('College', CollegeSchema);
