const express = require('express');
const router = express.Router();
const {
  getAllColleges,
  getCollegeByCourseName,
  addCollege,
} = require('../controller/CollegeController');

// Get all colleges
router.get('/colleges', getAllColleges);

// Get college by course name
router.get('/colleges/:courseName', getCollegeByCourseName);

// Add a new college
router.post('/colleges', addCollege);

module.exports = router;
