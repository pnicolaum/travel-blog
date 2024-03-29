const pool = require('../../../db.js');
const queries = require('./blog.queries.js');

const getBlogs = (req, res) => {
    pool.query(queries.getBlogsQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addBlogs = (req, res) => {
    const { title, imgRoute, continent, country, description, days, date } = req.body;

    pool.query(
        queries.addBlogsQuery,
        [title, imgRoute, continent, country, description, days, date],
        (error, results) => {
            if (error) throw error;
            res.status(201).send("Blog added succesfully");
        })
}

const getBlogById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getBlogByIdQuery, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const removeBlog = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getBlogByIdQuery, [id], (error, results) => {

        // check if blog exists
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("Blog not found in the database");
        }

        // remove user
        pool.query(queries.removeUserQuery, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("User removed succesfully");
        })
    })
}


module.exports = {
    getBlogs,
    addBlogs,
    getBlogById,
    removeBlog
}