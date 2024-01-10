const { error } = require('console');
const { Pool } = require('pg');

const pool = new Client({
    host: 'localhost',
    port: 5432,
    database: 'TravelBlog',
    user: 'postgres',
    password: 'malosos',
})

pool.connect((err) => {
    if (err) {
        console.log('connection error', err.stack);
    } else {
        console.log('connected');
    }
})

module.exports = pool;