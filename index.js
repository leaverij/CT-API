const express = require('express');
const app = express();
const port = 3000;

// mysql
const mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : '',
    password : '',
    database : ''
}); 
connection.connect();

app.get('/', (req, res) => {
    res.json({
        hello: 'world'
    });
});

app.get('/user', (req, res) => {
    let sql = `SELECT * FROM user`;
    connection.query(sql, (error, results, fields) => {
        if(error) throw error;
        res.json(results);
    });
});

app.get('/user/:user_id', (req, res) => {
    let user_id = req.params.user_id;
    let sql = `SELECT * FROM user WHERE user_id=${user_id}`;
    connection.query(sql, (error, results, fields) => {
        if(error) throw error;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});