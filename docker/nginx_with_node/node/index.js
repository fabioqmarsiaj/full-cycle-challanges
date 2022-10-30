const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')

const insert = `INSERT INTO people(name) values('Fabio')`


app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)
    connection.query(insert)
    connection.end()
    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta ', + port)
})