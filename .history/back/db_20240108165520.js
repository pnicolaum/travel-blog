const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    databse: 'TravelBlog',
    user: 'postgres',
    password: 'malosos',

})