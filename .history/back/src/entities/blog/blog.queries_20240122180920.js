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
const updateBlogByKeywordQuery = "UPDATE blogs SET " +
    "title = COALESCE($1, title), " +
    "continent = COALESCE($2, continent), " +
    "country = COALESCE($3, country), " +
    "description = COALESCE($4, description), " +
    "days = COALESCE($5, days), " +
    "date = COALESCE($6, date) " +
    "WHERE keyword = $7";



module.exports = {
    getBlogsQuery,
    getBlogByIdQuery,
    getBlogByTitleQuery,
    getBlogByKeywordQuery,
    getRecentBlogsQuery,
    removeBlogQuery,
    addBlogsQuery,
    updateBlogByKeywordQuery,
}