# Group E API
<small> Tejares: Implemented GET /exams endpoint<br>
Go: Implemented POST /exams endpoint<br>
Hagupar: Implemented PUT /exams/ endpoint</small>

# API Documentation
# Endpoints

<small>
GET /exams<br>
[<br>
  {<br>
    "id": 1,<br>
    "title": "Midterm Exam",<br>
    "subject": "INT PROG",<br>
    "date": "2025-03-26"<br>
  },<br>
  {<br>
    "id": 2,<br>
    "title": "Final Exam",<br>
    "subject": "INT PROG",<br>
    "date": "2025-05-09"<br>
  }<br>
]<br>

POST /exams<br>
{<br>
  "id": 3,<br>
  "title": "QUIZ",<br>
  "subject": "WEBDEV",<br>
  "date": "2025-05-10"<br>
}<br>

PUT /exams/id<br>
{<br>
  "id": 3,<br>
  "title": "QUIZ",<br>
  "subject": "WEBDEV",<br>
  "date": "2025-04-10"<br>
}<br>
</small>
