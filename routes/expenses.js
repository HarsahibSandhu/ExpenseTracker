const express = require('express');
const router = express.Router();
const db = require('../config/db');

// View all expenses
router.get('/', (req, res) => {
  const query = 'SELECT * FROM expenses';
  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    res.render('view-expenses', { expenses: result });
  });
});

// Add an expense
router.get('/add', (req, res) => {
  res.render('add-expense');
});

router.post('/add', (req, res) => {
  const { description, amount, paid_by } = req.body;
  const query = 'INSERT INTO expenses (description, amount, paid_by) VALUES (?, ?, ?)';
  db.query(query, [description, amount, paid_by], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    res.redirect('/expenses');
  });
});

module.exports = router;
