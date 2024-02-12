const getUsersQuery = "SELECT * FROM users";
const getUserByIdQuery = "SELECT * FROM users WHERE id = $1"

module.exports = {
    getUsersQuery,
    getUserByIdQuery,
};