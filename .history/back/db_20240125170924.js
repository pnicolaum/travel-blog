const { error } = require('console');
const { Pool } = require('pg');

const dotenv = require('dotenv');
dotenv.config();

// const pool = new Pool({
//     host: 'localhost',
//     port: 5432,
//     database: 'TravelBlog',
//     user: 'postgres',
//     password: 'X',
// })
const pool = new Pool({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
})


pool.connect((err) => {
    if (err) {
        console.log('connection error', err.stack);
    } else {
        console.log('connected');
    }
})

module.exports = pool;