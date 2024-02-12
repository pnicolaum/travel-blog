const pool = require('../../../db.js');
const queries = require('./user.queries.js');
const bcrypt = require('bcrypt');
require("dotenv").config();

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
    const { username, name, surname, mail, password, masterPassword } = req.body;


    if (masterPassword !== process.env.USER_MASTER_PASSWORD) {
        return res.send("Contraseña admin equivocada");
    }
    // check if email is repeated
    pool.query(queries.checkMailExistsQuery, [mail], (error, results) => {
        if (results.rows.length) {
            return res.send("Este mail ya existe");
        }

        // check if username is repeated
        pool.query(queries.checkUsernameExistsQuery, [username], (error, results) => {
            if (results.rows.length) {
                return res.send("Este usuario ya existe, prueba otro");
            }

            // hash contraseña
            const hashedPassword = bcrypt.hashSync(password, 10);

            // add user to ddbb    
            pool.query(
                queries.addUsersQuery,
                [username, name, surname, mail, hashedPassword],
                (error, results) => {
                    if (error) throw error;
                    return res.send("Usuario añadido con éxtio");
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
    console.log(username)
    console.log(password)

    pool.query(queries.getHashFromUsername, [username], (error, results) => {
        // compara password escrita por el usuario y hash en la bbdd
        console.log(passwordMatches)
        const passwordMatches = bcrypt.compareSync(password, results.rows[0].password);
        console.log(passwordMatches)
        if (error) throw error;
        if (passwordMatches) {
            req.session.user = { username: username };
            return res.send("Credenciales válidas, Iniciando sesion");
        } else {
            return res.send("Credenciales inválidas");
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