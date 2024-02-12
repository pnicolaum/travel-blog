const getUsersQuery = "SELECT * FROM users";
const getUserByIdQuery = "SELECT * FROM users WHERE id = $1"
const checkMailExistsQuery = "SELECT s FROM users s WHERE s.mail = $1";
const addUserQuery = ";"

module.exports = {
    getUsersQuery,
    getUserByIdQuery,
    checkMailExistsQuery,
    addUserQuery,
};