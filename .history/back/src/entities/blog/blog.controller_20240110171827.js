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
    // check if email exists
    pool.query(queries.checkMailExistsQuery, [mail], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists");
        }
        // add user to ddbb
        pool.query(
            queries.addBlogsQuery,
            [nick, name, surname, mail, password, phone, dob, nationality, gender],
            (error, results) => {
                if (error) throw error;
                res.status(201).send("User added succesfully");
            })
    })
}

module.exports = {
    getBlogs,
}