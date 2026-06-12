const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serves frontend files

// Database Connection
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'university_db',
    waitForConnections: true,
    connectionLimit: 10
});

// 1. GET: Fetch all students
app.get('/api/students', (req, res) => {
    const sql = `SELECT s.*, d.department_name FROM Student s 
                 LEFT JOIN Department d ON s.department_id = d.department_id`;
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// 2. POST: Add a new student
app.post('/api/students', (req, res) => {
    const { student_id, name, department_id, year, email } = req.body;
    const sql = `INSERT INTO Student (student_id, name, department_id, year, email) VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [student_id, name, department_id, year, email], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Student added successfully!' });
    });
});

// 3. PUT: Update an existing student
app.put('/api/students/:id', (req, res) => {
    const { name, department_id, year, email } = req.body;
    const { id } = req.params;
    const sql = `UPDATE Student SET name = ?, department_id = ?, year = ?, email = ? WHERE student_id = ?`;
    db.query(sql, [name, department_id, year, email, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Student updated successfully!' });
    });
});

// 4. DELETE: Remove a student
app.delete('/api/students/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM Student WHERE student_id = ?`;
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Student deleted successfully!' });
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));