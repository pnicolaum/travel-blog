// get
const getBlogsQuery = "SELECT * FROM blogs";
const getBlogByIdQuery = "SELECT * FROM blogs WHERE id = $1";
const getBlogByTitleQuery = "SELECT * FROM blogs WHERE TRIM(title) = $1";
const getBlogByKeywordQuery = "SELECT * FROM blogs WHERE TRIM(keyword) = $1";
const getRecentBlogsQuery = "SELECT title FROM blogs ORDER BY date DESC LIMIT 6";
// filtros
const getFilterQuery =
    "SELECT * FROM blogs WHERE (continent = $1 OR $1 IS NULL) AND (country = $2 OR $2 IS NULL) AND (days = $3 OR $3 IS NULL)";

// post
const addBlogsQuery =
    "INSERT INTO blogs (title, keyword, continent, country, description, days, date) VALUES ($1, $2, $3, $4, $5, $6, $7)";

// remove
const removeBlogQuery = "DELETE FROM blogs WHERE id = $1"

// update
const updateBlogByIdQuery = "UPDATE blogs SET " +
    "title = COALESCE($1, title), " +
    "keyword = COALESCE($2, keyword), " +
    "continent = COALESCE($3, continent), " +
    "country = COALESCE($4, country), " +
    "description = COALESCE($5, description), " +
    "days = COALESCE($6, days), " +
    "date = COALESCE($7, date) " +
    "WHERE id = $8";



module.exports = {
    getBlogsQuery,
    getBlogByIdQuery,
    getBlogByTitleQuery,
    getBlogByKeywordQuery,
    getFilterQuery,
    getBlogsByContinentQuery,
    getBlogsByCountryQuery,
    getBlogsByDaysQuery,
    getRecentBlogsQuery,
    removeBlogQuery,
    addBlogsQuery,
    updateBlogByIdQuery,
}