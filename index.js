const express = require('express');
const app = express();
const port = 80;

// mysql

const mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'ct-school.cx8nfhnsjxef.us-west-2.rds.amazonaws.com',
    user     : 'admin',
    password : 'ctschool',
    database : 'w3schools'
}); 
connection.connect();

app.get('/', (req, res) => {
    res.json({
        name: '胡士鑫',
        age: 34,
        email: 'rogerhu@gmail.com'
    });
});

app.get('/customers', (req, res) => {
    let sql = `SELECT * FROM customers`;
    connection.query(sql, (error, results, fields) => {
        if(error) throw error;
        res.json(results);
    });
});

app.get('/customer/:CustomerID', (req, res) => {
    let CustomerID = req.params.CustomerID;
    let sql = `SELECT * FROM customers WHERE CustomerID=${CustomerID}`;
    connection.query(sql, (error, results, fields) => {
        if(error) throw error;
        res.json(results);
    });
});

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost`);
});