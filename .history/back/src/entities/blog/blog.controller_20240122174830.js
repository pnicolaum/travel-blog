const pool = require('../../../db.js');
const queries = require('./blog.queries.js');

const getBlogs = (req, res) => {
    pool.query(queries.getBlogsQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addBlogs = (req, res) => {
    const { title, keyword, continent, country, description, days, date } = req.body;

    pool.query(
        queries.addBlogsQuery,
        [title, keyword, continent, country, description, days, date],
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
// Update usuario
const updateBlogByKeyword = (req, res) => {
    const { title, keyword, continent, country, description, days, date } = req.body;

    // check keyword user exists
    pool.query(queries.getUserByIdQuery, [keyword], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            return res.send("Blog not found in the database");
        }

        // check if mail is repeated
        pool.query(queries.checkMailExistsQuery, [mail], (error, mailResults) => {
            if (mailResults.rows.length && mailResults.rows[0].id !== id) {
                return res.send("Email already exists");
            }

            // check if username is repeated
            pool.query(queries.checkUsernameExistsQuery, [username], (error, usernameResults) => {
                if (usernameResults.rows.length && usernameResults.rows[0].id !== id) {
                    return res.send("Username already exists");
                }

                // update user
                pool.query(queries.updateUserQuery,
                    [username, name, surname, mail, password, id],
                    (error, results) => {
                        if (error) throw error;
                        res.status(200).send("User updated succesfully");
                    })
            })
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
    updateBlogByKeyword
}