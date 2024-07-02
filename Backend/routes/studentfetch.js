// studentfetch.js

const express = require('express');
const router = express.Router();
const { addStudent, editStudent, getStudentbyClass, getAllStudents, updateMarks,getStudent } = require('../controllers/studentController');

const Student = require('../models/Student');

router.post('/add-student', addStudent);
router.post('/edit-student', editStudent);
router.post('/get-studentbyclass', getStudentbyClass);
router.post('/get-allStudents', getAllStudents);
// Assuming you have express and necessary middlewares set up
 
router.post('/update-monthly-score', updateMarks);
router.post('/getstudent', getStudent);
module.exports = router;
