const pool = require('../../../db.js');
const queries = require('./subscription.queries.js');

//get
const getSubscriptions = (req, res) => {
    pool.query(queries.getSubscriptionsQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getMailByMail = (req, res) => {
    const { mail } = req.params;
    pool.query(queries.getMailByMailQuery, [mail], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getMailById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getMailByIdQuery, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

// post
const addSubscriptions = (req, res) => {
    const { mail } = req.body;

    pool.query(
        queries.addSubscriptionsQuery, [mail], (error, results) => {
            if (error) throw error;
            res.status(201).send("Mail added succesfully");
        });
}

// delete
const removeSubscriptionByMail = (req, res) => {
    const { mail } = req.body;

    pool.query(queries.getMailByMailQuery, [mail], (error, results) => {
        const noMailFound = !results.rows.length;

        if (noMailFound) {
            return res.status(200).json("Mail not found in the database");
        }
        pool.query(queries.removeSubscriptionByMailQuery, [mail], (error, results) => {
            if (error) throw error;
            return res.status(200).json("Mail removed succesfully");
        })
    })
}

module.exports = {
    getSubscriptions,
    getMailByMail,
    addSubscriptions,
    getMailById,
    removeSubscriptionByMail
}