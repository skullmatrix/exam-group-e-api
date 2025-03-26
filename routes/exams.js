const express = require('express');
const router = express.Router();

//added a comment for a sample conflict

// Sample Data
let exams = [
  { 
    id: 1, 
    title: 'Midterm Exam', 
    subject: 'INT PROG', 
    date: '2025-03-26' 
  },
  { 
    id: 2, 
    title: 'Final Exam', 
    subject: 'INT PROG', 
    date: '2025-05-09' 
  }
];

// tejares-get
router.get('/', (req, res) => {
  res.json(exams);
});

// go-post
router.post('/', (req, res) => {
    const newExam = {
      id: exams.length + 1,
      ...req.body
    };
    exams.push(newExam);
    res.status(201).json(newExam);
  });

module.exports = router;