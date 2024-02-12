const pool = require('../../../db.js');
const queries = require('./user.queries.js');

const getSubscriptions = (req, res) => {
    pool.query(queries.getSubscriptionsQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}


module.exports = {
    getSubscriptions,
}