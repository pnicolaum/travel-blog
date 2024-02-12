const getBlogsQuery = "SELECT * FROM blogs";
const addBlogsQuery =
    "INSERT INTO blogs (title, imgRoute, continent, country, description, days, date) VALUES ($1, $2, $3, $4, $5, $6, $7)";
const getBlogByIdQuery = "SELECT * FROM blogs WHERE id = $1";
const removeBlogQuery = "DELETE FROM blogs WHERE id = $1"
const getRecentBlogsQuery = "SELECT title FROM tu_tabla ORDER BY fecha_atributo DESC LIMIT 6";

module.exports = {
    getBlogsQuery,
    addBlogsQuery,
    getBlogByIdQuery,
    removeBlogQuery,
    getRecentBlogsQuery
}