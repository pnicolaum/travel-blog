const pool = require('../../../db.js');
const queries = require('./blog.queries.js');

const getBlogs = (req, res) => {
    pool.query(queries.getBlogsQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addBlogs = (req, res) => {
    const { title, imgRoute, continent, country, description, days } = req.body;

    pool.query(
        queries.addBlogsQuery,
        [title, imgRoute, continent, country, description, days],
        (error, results) => {
            if (error) throw error;
            res.status(201).send("Blog added succesfully");
        })
}

module.exports = {
    getBlogs,
}