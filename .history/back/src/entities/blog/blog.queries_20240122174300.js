// get
const getBlogsQuery = "SELECT * FROM blogs";
const getBlogByIdQuery = "SELECT * FROM blogs WHERE id = $1";
const getBlogByTitleQuery = "SELECT * FROM blogs WHERE TRIM(title) = $1";
const getBlogByKeywordQuery = "SELECT * FROM blogs WHERE TRIM(keyword) = $1";
const getRecentBlogsQuery = "SELECT title FROM blogs ORDER BY date DESC LIMIT 6";

// post
const addBlogsQuery =
    "INSERT INTO blogs (title, keyword, continent, country, description, days, date) VALUES ($1, $2, $3, $4, $5, $6, $7)";

// remove
const removeBlogQuery = "DELETE FROM blogs WHERE id = $1"

// update
const updateBlogQuery = "UPDATE blogs SET " +
    "username = COALESCE($1, username), " +
    "name = COALESCE($2, name), " +
    "surname = COALESCE($3, surname), " +
    "mail = COALESCE($4, mail), " +
    "password = COALESCE($5, password) " +
    "WHERE id = $6";



module.exports = {
    getBlogsQuery,
    getBlogByIdQuery,
    getBlogByTitleQuery,
    getBlogByKeywordQuery,
    getRecentBlogsQuery,
    removeBlogQuery,
    addBlogsQuery,
    updateBlogQuery,
}