const pool = require('../../../db.js');
const queries = require('./section.queries.js');

// get
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
            return res.status(200).json({ message: 'Section no encontrado' });
        }
        return res.status(200).json(results.rows);
    })
}

const getSectionByBlogid = (req, res) => {
    const blogid = parseInt(req.params.blogid);
    pool.query(queries.getSectionByBlogIdQuery, [blogid], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

// update
const addSections = (req, res) => {
    const { title, description, blogid, keyword, structure } = req.body;
    const decodedDescription = description.replace(/\\n/g, '\n'); // Decodificar saltos de línea

    pool.query(queries.getSectionByKeywordQuery, [keyword], (error, resultsKeyword) => {
        if (resultsKeyword.rows.length > 0) {
            return res.status(200).json({ message: 'Keyword ya emleada' });
        }

        pool.query(
            queries.addSectionsQuery,
            [title, decodedDescription, blogid, keyword, structure],
            (error, results) => {
                if (error) throw error;
                res.status(201).send("Section added succesfully");
            })
    })


}

// remove 
const removeSection = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getSectionByIdQuery, [id], (error, results) => {
        const noSectionFound = !results.rows.length;
        if (noSectionFound) {
            return res.status(200).json("Section not found in the database");
        }
        pool.query(queries.removeSectionQuery, [id], (error, results) => {
            if (error) throw error;
            return res.status(200).json({ message: "Section removed successfully", removedBlogId: id });
        })

    })
}

// update section
const updateSectionById = (req, res) => {

    const id = parseInt(req.params.id);
    const { title, description, keyword, structure } = req.body;
    const decodedDescription = description.replace(/\\n/g, '\n'); // Decodificar saltos de línea

    // check if keyword is repeated
    pool.query(queries.getSectionByKeywordQuery, [keyword], (error, results) => {
        if (results.rows.length && results.rows[0].id !== id) {
            return res.send("Section keyword already exists");
        }

        // update section
        pool.query(queries.updateSectionByIdQuery,
            [title, decodedDescription, keyword, structure, id],
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
    getSectionByBlogid,
    addSections,
    removeSection,
    updateSectionById
}