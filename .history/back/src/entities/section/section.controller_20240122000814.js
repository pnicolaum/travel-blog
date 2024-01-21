const pool = require('../../../db.js');
const queries = require('./section.queries.js');

const getSections = (req, res) => {
    pool.query(queries.getSectionsQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getSectionById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getSectionByIdQuery, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getSectionByTitle = (req, res) => {
    const { title } = req.params;
    pool.query(queries.getSectionByTitleQuery, [title], (error, results) => {
        if (error) throw error;
        if (results.rows.length === 0) {
            return res.status(404).json({ message: 'Section no encontrado' });
        }
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getSections,
    getSectionById,
    getSectionByTitle
}