const pool = require('../../../db.js');
const queries = require('./blog.queries.js');

const getBlogs = (req, res) => {
    pool.query(queries.getBlogsQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
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
    const { title } = req.params;
    pool.query(queries.getBlogByTitleQuery, [title], (error, results) => {
        if (error) throw error;
        if (results.rows.length === 0) {
            return res.status(404).json({ message: 'Blog no encontrado' });
        }
        res.status(200).json(results.rows);
    })
}

const getBlogByKeyword = (req, res) => {
    const { keyword } = req.params;
    pool.query(queries.getBlogByKeywordQuery, [keyword], (error, results) => {
        if (error) throw error;
        if (results.rows.length === 0) {
            return res.status(404).json({ message: 'Blog no encontrado' });
        }
        res.status(200).json(results.rows);
    })
}

const addBlogs = (req, res) => {
    const { title, keyword, continent, country, description, days, date } = req.body;

    // comprueba que no se repita keyword
    pool.query(queries.getBlogByKeywordQuery, [keyword], (error, resultsKeyword) => {
        if (resultsKeyword.rows.length > 0) {
            // return res.status(404).json({ message: 'Keyword ya emleada' });
            return res.status(200).json({ message: 'Keyword ya emleada' });
        }

        pool.query(
            queries.addBlogsQuery,
            [title, keyword, continent, country, description, days, date],
            (error, results) => {
                if (error) throw error;
                res.status(201).send("Blog added succesfully");
            })
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

// update blog
const updateBlogById = (req, res) => {

    const id = parseInt(req.params.id);
    const { title, keyword, continent, country, description, days, date } = req.body;

    // check if keyword is repeated
    pool.query(queries.getBlogByKeywordQuery, [keyword], (error, results) => {
        if (results.rows.length && results.rows[0].id !== id) {
            return res.send("Blog keyword already exists");
        }

        // update blog
        pool.query(queries.updateBlogByIdQuery,
            [title, keyword, continent, country, description, days, date, id],
            (error, results) => {
                if (error) throw error;
                res.status(200).send("Blog updated succesfully");
            })
    })

}



module.exports = {
    getBlogs,
    getBlogByTitle,
    getBlogById,
    getBlogByKeyword,
    addBlogs,
    removeBlog,
    getRecentBlogs,
    updateBlogById
}