const pool = require('../../../db.js');
const queries = require('./subscription.queries.js');

const getSubscriptions = (req, res) => {
    pool.query(queries.getSubscriptionsQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addSubscriptions = (req, res) => {
    const { mail } = req.body;
    // check if email exists
    pool.query(queries.checkMailExistsQuery, [mail], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists");
        } else { // add mail to ddbb
            pool.query(
                queries.addSubscriptionsQuery, [mail], (error, results) => {
                    if (error) throw error;
                    res.status(201).send("Mail added succesfully");
                })
        }
    })
}

const getMailById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getMailByIdQuery, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const removeSubscription = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getMailByIdQuery, [id], (error, results) => {
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

module.exports = {
    getSubscriptions,
    addSubscriptions,
    getMailById,
    removeSubscription,
}