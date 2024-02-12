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

const getSectionByKeyword = (req, res) => {
    const { keyword } = req.params;
    pool.query(queries.getSectionByKeywordQuery, [keyword], (error, results) => {
        if (error) throw error;
        if (results.rows.length === 0) {
            return res.status(404).json({ message: 'Section no encontrado' });
        }
        res.status(200).json(results.rows);
    })
}

const addSections = (req, res) => {
    const { title, description, keyword, structure } = req.body;

    pool.query(
        queries.addSectionsQuery,
        [title, description, keyword, structure],
        (error, results) => {
            if (error) throw error;
            res.status(201).send("Section added succesfully");
        })
}

// remove section
const removeSection = (req, res) => {
    const id = parseInt(req.params.id);

    // check if blog exists
    pool.query(queries.getSectionByIdQuery, [id], (error, results) => {
        const noSectionFound = !results.rows.length;
        if (noSectionFound) {
            return res.send("Section not found in the database");
        }

        // remove user
        pool.query(queries.removeSectionQuery, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Section removed succesfully");
        })

    })
}

// update section
const updateSectionById = (req, res) => {

    const id = parseInt(req.params.id);
    const { title, description, keyword, structure } = req.body;

    // check if keyword is repeated
    pool.query(queries.getSectionByKeywordQuery, [keyword], (error, results) => {
        if (results.rows.length && results.rows[0].id !== id) {
            return res.send("Section keyword already exists");
        }

        // update blog
        pool.query(queries.updateSectionByIdQuery,
            [title, description, keyword, structure, id],
            (error, results) => {
                if (error) throw error;
                res.status(200).send("Section updated succesfully");
            })
    })

}


module.exports = {
    getSections,
    getSectionById,
    getSectionByTitle,
    getSectionByKeyword,
    addSections,
    removeSection
}