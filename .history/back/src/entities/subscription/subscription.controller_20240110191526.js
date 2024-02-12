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
        }
        // add mail to ddbb
        pool.query(
            queries.addSubscriptionsQuery, [mail], (error, results) => {
                if (error) throw error;
                res.status(201).send("Mail added succesfully");
            })
    })
}

module.exports = {
    getSubscriptions,
    addSubscriptions,
}