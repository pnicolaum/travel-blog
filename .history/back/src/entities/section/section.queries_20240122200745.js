// get
const getSectionsQuery = "SELECT * FROM sections";
const getSectionByIdQuery = "SELECT * FROM sections WHERE id = $1";
const getSectionByTitleQuery = "SELECT * FROM sections WHERE TRIM(title) = $1";
const getSectionByKeywordQuery = "SELECT * FROM sections WHERE TRIM(keyword) = $1";

// post
const addSectionsQuery =
    "INSERT INTO sections (title, description, keyword, structure) VALUES ($1, $2, $3, $4)";

// remove
const removeSectionQuery = "DELETE sections blogs WHERE id = $1"

// update


module.exports = {
    getSectionsQuery,
    getSectionByIdQuery,
    getSectionByTitleQuery,
    getSectionByKeywordQuery,
    addSectionsQuery
}


