const getBlogsQuery = "SELECT * FROM blogs";
const addNewBlogQuery = "INSERT INTO blogs (title, imgRoute, continent, country, description, days) VALUES ($1, $2, $3, $4, $5, $6)";



module.exports = {
    getBlogsQuery,
    addNewBlogQuery,
}