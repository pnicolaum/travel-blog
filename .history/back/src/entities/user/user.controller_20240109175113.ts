const pool = require('../../../db.js');
const queries = require('./user.queries.ts');

const getUsers = (req, res) => {
    pool.query(queries.getUsersQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addUsers = (req, res) => {
    const { nick, name, surname, mail, password, phone, dob, nationality, gender } = req.body;
    // check if email exists
    pool.query(queries.checkMailExistsQuery, [mail], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists");
        }
        // add student to ddbb
        pool.query(
            queries.addUserQuery,
            [nick, name, surname, mail, password, phone, dob, nationality, gender],
            (error, results) => {
                if (error) throw error;
                res.status(201).send("User added succesfully");
            })
    })
}


const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserByIdQuery, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getUsers,
    addUsers,
    getUserById,
}