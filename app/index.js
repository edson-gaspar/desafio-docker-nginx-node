const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb',    
}

const connection = mysql.createConnection(config);
connection.on('Error', (err) => {
    console.log('Error connecting to database', err.toString());
});

app.get('/', (req, res) => {
    const sqlInsert = `INSERT INTO people (name) VALUES ('Edson-${Math.random().toString(36).substring(7)}')`;
    const sqlQuery = 'SELECT name FROM people';

    connection.query(sqlInsert, (err, result) => {
        if (err) {
            res.send(err.toString());
            return;
        }
        connection.query(sqlQuery, (err, result) => {
            if (err) {
                res.send(err.toString());
                return;
            }
            res.send(`
                <h1>Full Cycle Rocks!</h1>
                <ul>
                    ${result.map((item) => `<li>${item.name}</li>`).join('')}
            `);
        });
    });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});