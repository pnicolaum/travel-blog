const pool = require('../../../db.js');
const queries = require('./user.queries.ts');

const getUsers = (req, res) => {
    pool.query(queries.getUsersQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);

}

module.exports = {
    getUsers,

}