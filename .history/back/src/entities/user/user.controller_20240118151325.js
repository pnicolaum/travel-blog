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
const addUsers = async (req, res) => {
    const { username, name, surname, mail, password } = req.body;

    // check if email is repeated
    pool.query(queries.checkMailExistsQuery, [mail], (error, results) => {
        if (results.rows.length) {
            return res.send("Email already exists");
        }

        // check if username is repeated
        pool.query(queries.checkUsernameExistsQuery, [username], (error, results) => {
            if (results.rows.length) {
                return res.send("Username already exists");
            }

            // hash contraseña
            const hashedPassword = bcrypt.hashSync(password, 10);

            // add user to ddbb    
            pool.query(
                queries.addUsersQuery,
                [username, name, surname, mail, hashedPassword],
                (error, results) => {
                    if (error) throw error;
                    res.status(201).send("User added succesfully");
                })
        })
    })
}

// Eliminar usuario
const removeUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserByIdQuery, [id], (error, results) => {
        // check if user exists
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            return res.send("User not found in the database");
        }
        // remove user
        pool.query(queries.removeUserQuery, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("User removed succesfully");
        })

    })
}

// Update usuario
const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { username, name, surname, mail, password } = req.body;

    // check if user exists
    pool.query(queries.getUserByIdQuery, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            return res.send("User not found in the database");
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

// check credentials
const checkCredentials = (req, res) => {
    const { username, password } = req.body;
    // hash contraseña
    pool.query(queries.getHashFromUsername, [username], (error, userResutls) => {
        const passwordMatches = bcrypt.compareSync(password, userResutls.rows[0].password);
        console.log(hashedPassword);
        console.log(password);
        console.log(userResutls.rows[0]);
        console.log(userResutls.rows[0].password);
        if (error) throw error;
        if (passwordMatches) {
            res.status(200).json({ message: 'Credenciales válidas' });
        } else {
            // res.status(401).json({ message: 'Credenciales inválidas' });
            res.status(201).json({ message: 'Credenciales inválidas' });
        }
    })



    pool.query(queries.checkCredentialsQuery, [username, password], (error, results) => {
        if (error) throw error;
        if (results.rows.length > 0) {
            res.status(200).json({ message: 'Credenciales válidas' });
        } else {
            // res.status(401).json({ message: 'Credenciales inválidas' });
            res.status(201).json({ message: 'Credenciales inválidas' });
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
    checkCredentials
}