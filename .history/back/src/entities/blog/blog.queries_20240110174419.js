const getBlogsQuery = "SELECT * FROM blogs";
const addBlogsQuery =
    "INSERT INTO blogs (title, imgRoute, continent, country, description, days, date) VALUES ($1, $2, $3, $4, $5, $6, $7)";

const getBlogByIdQuery = "SELECT * FROM blogs WHERE id = $1";


module.exports = {
    getBlogsQuery,
    addBlogsQuery,
    getBlogByIdQuery,
}