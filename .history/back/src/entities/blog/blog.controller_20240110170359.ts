const pool = require('../../../db.js');
const queries = require('./blog.queries.ts');

const getBlogs = (req, res) => {
    pool.query(queries.getBlogsQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}



module.exports = {
    getBlogs,
}