const getBlogsQuery = "SELECT * FROM blogs";
const addBlogsQuery =
    "INSERT INTO blogs (title, imgRoute, continent, country, description, days, date) VALUES ($1, $2, $3, $4, $5, $6, $7)";
const getBlogByIdQuery = "SELECT * FROM blogs WHERE id = $1";
const removeBlogQuery = "DELETE FROM blogs WHERE id = $1"
const getLast6BlogsQuery = "SELECT *FROM blogs ORDER BY date DESC LIMIT 1";

module.exports = {
    getBlogsQuery,
    addBlogsQuery,
    getBlogByIdQuery,
    removeBlogQuery,
    getLast6BlogsQuery
}