import pg from pg;

const { error } = require('console');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'TravelBlog',
    user: 'postgres',
    password: 'malosos',
})


pg.types.setTypeParser(pg.types.builtins.DATE, value => value);

pool.connect((err) => {
    if (err) {
        console.log('connection error', err.stack);
    } else {
        console.log('connected');
    }
})

module.exports = pool;