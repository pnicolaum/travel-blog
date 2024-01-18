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
        const noBlogFound = !results.rows.length;
        if (noBlogFound) {
            res.send("Blog not found in the database");
        } else { // remove user
            pool.query(queries.removeBlogQuery, [id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Blog removed succesfully");
            })
        }
    })
}


const getRecentBlogs = (req, res) => {
    pool.query(queries.getRecentBlogsQuery, (error, results) => {
        if (error) throw error;
        const titulos = results.rows.map((fila) => fila.title);
        const primerosSeisTitulos = titulos.slice(0, 6);
        res.status(200).json({ titulos: primerosSeisTitulos });
        // const titulos = results.rows.map((fila) => fila.title);
        // res.json({ titulos });
    })
}



module.exports = {
    getBlogs,
    addBlogs,
    getBlogById,
    removeBlog,
    getRecentBlogs
}