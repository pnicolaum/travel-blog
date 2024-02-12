const getBlogsQuery = "SELECT * FROM blogs";
const getBlogByIdQuery = "SELECT * FROM blogs WHERE id = $1";
const getBlogByTitleQuery = "SELECT * FROM blogs WHERE TRIM(title) = $1";

const addBlogsQuery =
    "INSERT INTO blogs (title, imgRoute, continent, country, description, days, date) VALUES ($1, $2, $3, $4, $5, $6, $7)";

const removeBlogQuery = "DELETE FROM blogs WHERE id = $1"
const getRecentBlogsQuery = "SELECT title FROM blogs ORDER BY date DESC LIMIT 6";


module.exports = {
    getBlogsQuery,
    addBlogsQuery,
    getBlogByIdQuery,
    getBlogByTitleQuery,
    removeBlogQuery,
    getRecentBlogsQuery
}