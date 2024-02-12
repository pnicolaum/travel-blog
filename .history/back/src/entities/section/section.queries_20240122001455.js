const getSectionsQuery = "SELECT * FROM sections";
const getSectionByIdQuery = "SELECT * FROM sections WHERE id = $1";
const getSectionByTitleQuery = "SELECT * FROM sections WHERE TRIM(title) = $1";
const getSectionByKeywordQuery = "SELECT * FROM sections WHERE TRIM(keyword) = $1";

const addSectionsQuery =
    "INSERT INTO sections (title, text, keyword, structure) VALUES ($1, $2, $3, $4)";




module.exports = {
    getSectionsQuery,
    getSectionByIdQuery,
    getSectionByTitleQuery,
    getSectionByKeywordQuery,
    addSectionsQuery
}


