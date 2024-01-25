const { error } = require('console');
const { Pool } = require('pg');

const dotenv = require({ path: 'secret.env' });
dotenv.config();

// const pool = new Pool({
//     host: 'localhost',
//     port: 5432,
//     database: 'TravelBlog',
//     user: 'postgres',
//     password: 'X',
// })
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
    }
})

module.exports = pool;