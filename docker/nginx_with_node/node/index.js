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
const sqlSelect = 'SELECT name FROM people'


app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)

    let name = req.query.name;
    if(typeof name !== 'undefined' && name){
        insertSQL(name, connection)
    }

    var showPeoples = '<h1>Full Cycle Rocks!!!</h1><ul>'
    connection.query(sqlSelect, function (err, result, fields) {
        if (err) throw err;
        console.log("Result:" + result);
        result.forEach(element => {
            showPeoples = showPeoples + '<li>' + element.name + '</li>' 
        });
        
        showPeoples = showPeoples + '</ul>'
        console.log("Peoples: " + showPeoples);
        connection.end()
        res.send(showPeoples)
    });
})


function insertSQL(name, connection){
    connection.query(sqlInsert,name, function (err, result) {
        if (err) throw err;
        console.log('Nome ' + name + ' registrado')
    })
}

app.listen(port, () => {
    console.log('Rodando na porta ', + port)
})