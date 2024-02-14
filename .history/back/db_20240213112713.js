const { error } = require('console');
const { Pool } = require('pg');
require("dotenv").config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,

});


pool.connect((err) => {
    if (err) {
        console.log('connection error', err.stack);
    } else {
        console.log('connected');
        console.log(process.env.DB_HOST);
        console.log(process.env.DB_PORT);
        console.log(process.env.DB_DATABASE);
        console.log(process.env.DB_USER);
        console.log(process.env.DB_PASSWORD);
    }
})

pool.query('SELECT * FROM blogs', (err, res) => {
    if (err) {
        console.error('Error al ejecutar la consulta:', err.stack);
    } else {
        console.log('Consulta exitosa. Resultados:', res.rows);
    }
});

module.exports = pool;