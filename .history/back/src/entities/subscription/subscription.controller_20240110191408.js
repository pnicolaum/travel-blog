const pool = require('../../../db.js');
const queries = require('./subscription.queries.js');

const getSubscriptions = (req, res) => {
    pool.query(queries.getSubscriptionsQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addUsers = (req, res) => {
    const { mail } = req.body;
    // check if email exists
    pool.query(queries.checkMailExistsQuery, [mail], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists");
        }
        // add user to ddbb
        pool.query(
            queries.addUsersQuery,
            [nick, name, surname, mail, password, phone, dob, nationality, gender],
            (error, results) => {
                if (error) throw error;
                res.status(201).send("User added succesfully");
            })
    })
}

module.exports = {
    getSubscriptions,
}