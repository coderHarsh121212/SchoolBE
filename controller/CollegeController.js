const College = require("../models/College");
const CourseFee = require("../models/CourseFee");

// Get all colleges with details
exports.getAllColleges = async (req, res) => {
  try {
    const colleges = await College.find().populate("courseFee");
    res.status(200).json(colleges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get college by course name
exports.getCollegeByCourseName = async (req, res) => {
  try {
    const college = await College.findOne({
      courseName: req.params.courseName,
    }).populate("courseFee");
    if (!college) {
      return res.status(404).json({ message: "College not found" });
    }
    res.status(200).json(college);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new college
exports.addCollege = async (req, res) => {
  console.log(req.body)

  try {
    const {
      name,
      courseName,
      duration,
      accommodation,
      accommodationFee,
      courseFeeAmount,
    } = req.body;
console.log(req.body)
    // Create course fee entry first
    const newCourseFee = new CourseFee({ courseFee: courseFeeAmount });
    const savedCourseFee = await newCourseFee.save();

    // Create college entry with the reference to course fee
    const newCollege = new College({
      name,
      courseName,
      duration,
      accommodation,
      accommodationFee,
      courseFee: savedCourseFee._id,
    });

    const savedCollege = await newCollege.save();
    res.status(201).json(savedCollege);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
