const mysql = require('mysql2');

const connection = mysql.createConnection(
  "mysql://avnadmin:AVNS_bCyjfXz3bi9gOgo9Vgu@mysql-1730acb0-harsahib436-b453.i.aivencloud.com:10425/defaultdb"
);

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

module.exports = connection;

