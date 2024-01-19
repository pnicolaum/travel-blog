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

const getBlogByTitle = (req, res) => {
    const { title } = req.body;
    pool.query(queries.getBlogByIdQuery, [title], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const removeBlog = (req, res) => {
    const id = parseInt(req.params.id);

    // check if blog exists
    pool.query(queries.getBlogByIdQuery, [id], (error, results) => {
        const noBlogFound = !results.rows.length;
        if (noBlogFound) {
            return res.send("Blog not found in the database");
        }

        // remove user
        pool.query(queries.removeBlogQuery, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Blog removed succesfully");
        })

    })
}


const getRecentBlogs = (req, res) => {
    pool.query(queries.getRecentBlogsQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}



module.exports = {
    getBlogs,
    addBlogs,
    getBlogByTitle,
    getBlogById,

    removeBlog,
    getRecentBlogs
}