const pool = require('../../../db.js');

const getUsers = (req, res) => {
    pool.query("SELECT * FROM students", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getUsers,

}