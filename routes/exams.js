const express = require('express');
const router = express.Router();

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

// hagupar-put 
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const examIndex = exams.findIndex(exam => exam.id === id);
    
    if (examIndex === -1) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    
    exams[examIndex] = { 
      ...exams[examIndex], 
      ...req.body 
    };
    
    res.json(exams[examIndex]);
  });
  
module.exports = router;

