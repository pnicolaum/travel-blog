const pool = require('../../../db.js');
const queries = require('./user.queries.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Obtener todos los usuarios 
const getUsers = (req, res) => {
    pool.query(queries.getUsersQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

// Obtener usuario por su ID
const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserByIdQuery, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

// Obtener usuario por su username
const getUserByUsername = (req, res) => {
    const { username } = req.body;
    pool.query(queries.getUserByUsernameQuery, [username], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

// Añadir usuario
const addUsers = (req, res) => {
    const { username, name, surname, mail, password } = req.body;
    // check if email exists
    pool.query(queries.checkMailExistsQuery, [mail], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists");
        } else {
            // check if username exists
            pool.query(queries.checkUsernameExistsQuery, [username], (error, results) => {
                if (results.rows.length) {
                    res.send("Username already exists");
                } else {
                    // add user to ddbb    
                    pool.query(
                        queries.addUsersQuery,
                        [username, name, surname, mail, password],
                        (error, results) => {
                            if (error) throw error;
                            res.status(201).send("User added succesfully");
                        })
                }
            })
        }
    })
}

// Eliminar usuario
const removeUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserByIdQuery, [id], (error, results) => {
        // check if user exists
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User not found in the database");
        } else { // remove user
            pool.query(queries.removeUserQuery, [id], (error, results) => {
                if (error) throw error;
                res.status(200).send("User removed succesfully");
            })
        }
    })
}

// Actualizar usuario
/*
const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getUserByIdQuery, [id], (error, results) => {

        // check if user exists
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User not found in the database");
        }

        pool.query(queries.updateUserQuery, [name, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("User updated succesfully");
        })
    })
}
*/
const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { username, name, surname, mail, password } = req.body;

    pool.query(queries.getUserByIdQuery, [id], (error, results) => {
        // check if user exists
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User not found in the database");
        } else { // check if mail exists
            pool.query(queries.checkMailExistsQuery, [mail], (error, mailResults) => {
                if (/*results.rows.length*/ mailResults.rows.length && mailResults.rows[0].id !== id) {

                    res.send(id);
                    res.send(mailResults.rows[0].id);
                    res.send("Email already exists");
                } else { // check if username exists
                    pool.query(queries.checkUsernameExistsQuery, [username], (error, usernameResults) => {
                        if (/*results.rows.length*/ usernameResults.rows.length && usernameResults.rows[0].id !== id) {
                            res.send("Username already exists");
                        } else { // update user
                            pool.query(queries.updateUserQuery,
                                [username, name, surname, mail, password, id],
                                (error, results) => {
                                    if (error) throw error;
                                    res.status(200).send("User updated succesfully");
                                })
                        }
                    })
                }
            })
        }
    })
}

module.exports = {
    getUsers,
    getUserById,
    getUserByUsername,
    addUsers,
    removeUser,
    updateUser,
}