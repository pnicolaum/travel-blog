const pool = require('../../../db.js');
const queries = require('./subscription.queries.js');

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


const addSubscriptions = (req, res) => {
    const { mail } = req.body;

    pool.query(
        queries.addSubscriptionsQuery, [mail], (error, results) => {
            if (error) throw error;
            res.status(201).send("Mail added succesfully");
        });
}

const getMailById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getMailByIdQuery, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

// const removeSubscription = (req, res) => {
//     const id = parseInt(req.params.id);

//     pool.query(queries.getMailByIdQuery, [id], (error, results) => {
//         // check if mail exists
//         const noMailFound = !results.rows.length;
//         if (noMailFound) {
//             res.send("Mail not found in the database");
//         } else { // remove mail
//             pool.query(queries.removeSubscriptionQuery, [id], (error, results) => {
//                 if (error) throw error;
//                 res.status(200).send("Mail removed succesfully");
//             })
//         }
//     })
// }

const removeSubscriptionByMailQuery = (req, res) => {
    const { mail } = req.body;

    pool.query(queries.getMailByMailQuery, [mail], (error, results) => {
        const noMailFound = !results.rows.length;
        if (noMailFound) {
            return res.send("Mail not found in the database");
        }
        pool.query(queries.removeSubscriptionByMailQuery, [mail], (error, results) => {
            if (error) throw error;
            res.status(200).send("Mail removed succesfully");
        })
    })
}

module.exports = {
    getSubscriptions,
    getMailByMail,
    addSubscriptions,
    getMailById,
    removeSubscription,
}