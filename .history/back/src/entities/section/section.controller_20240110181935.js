const pool = require('../../../db.js');
const queries = require('./section.queries.js');

const getSections = (req, res) => {
    pool.query(queries.getSectionsQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getSections
}