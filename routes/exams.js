const express = require('express');
const router = express.Router();

// sample datas
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
  rejoin(exams);
});
