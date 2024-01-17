const pool = require('../../../db.js');
const queries = require('./user.queries.js');
const jwt = require('jsonwebtoken');
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
        } else {
            // check if username exists
            pool.query(queries.checkUsernameExistsQuery, [nick], (error, results) => {
                if (results.rows.length) {
                    res.send("Username already exists");
                } else {
                    // add user to ddbb    
                    pool.query(
                        queries.addUsersQuery,
                        [nick, name, surname, mail, password, phone, dob, nationality, gender],
                        (error, results) => {
                            if (error) throw error;
                            res.status(201).send("User added succesfully");
                        })
                }
            })
        }
    })
}


const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserByIdQuery, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getUserByUsername = (req, res) => {
    const { nick } = parseInt(req.params.nick);
    pool.query(queries.getUserByUsernameQuery, [nick], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}


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

const loginUser = (req, res) => {
    const { nick, password } = req.body;

    pool.query(queries.getUserByUsername, [nick], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User not found in the database");
        } else {
            const user = results.rows[0];

            if (user && bcrypt.compareSync(password, user.password)) {
                // Generar token JWT con el id del usuario
                const token = jwt.sign({ userId: user.id }, 'tu_secreto', { expiresIn: '1h' });

                res.json({ token });
            } else {
                res.status(401).json({ message: 'Credenciales inválidas' });
            }
        }
    })
}


module.exports = {
    getUsers,
    addUsers,
    getUserById,
    getUserByUsername,
    removeUser,
    updateUser,
    loginUser
}