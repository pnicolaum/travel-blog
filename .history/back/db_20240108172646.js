const { error } = require('console');
const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'TravelBlog',
    user: 'postgres',
    password: 'malosos',
})

client.connect((err) => {
    if (err) {
        console.log('connection error', err.stack);
    } else {
        console.log('connected');
    }
})

module.exports = client;