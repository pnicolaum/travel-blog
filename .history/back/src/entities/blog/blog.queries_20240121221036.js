const getBlogsQuery = "SELECT * FROM blogs";
const getBlogByIdQuery = "SELECT * FROM blogs WHERE id = $1";
const getBlogByTitleQuery = "SELECT * FROM blogs WHERE TRIM(title) = $1";
const getBlogByKeywordQuery = "SELECT * FROM blogs WHERE TRIM(keyword) = $1";
const getRecentBlogsQuery = "SELECT title FROM blogs ORDER BY date DESC LIMIT 6";

const addBlogsQuery =
    "INSERT INTO blogs (title, keyword, continent, country, description, days, date) VALUES ($1, $2, $3, $4, $5, $6, $7)";

const removeBlogQuery = "DELETE FROM blogs WHERE id = $1"




module.exports = {
    getBlogsQuery,

    getBlogByIdQuery,
    getBlogByTitleQuery,
    getBlogByKeywordQuery,
    removeBlogQuery,
    getRecentBlogsQuery,
    addBlogsQuery,
}