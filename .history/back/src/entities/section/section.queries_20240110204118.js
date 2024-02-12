const getSectionsQuery = "SELECT * FROM sections";



module.exports = {
    getSectionsQuery,
}


// SELECT blogs.title, blogs.description, sections.title, sections.text
// FROM blogs
// JOIN sections ON blogs.ID = sections.blog_id;