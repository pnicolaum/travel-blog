const getUsersQuery = "SELECT * FROM users";
const getUserByIdQuery = "SELECT * FROM users WHERE id = $1"
const getUserByUsernameQuery = "SELECT * FROM users WHERE username = $1";
const checkMailExistsQuery = "SELECT s FROM users s WHERE s.mail = $1";
const checkUsernameExistsQuery = "SELECT s FROM users s WHERE s.username = $1";
const addUsersQuery =
    "INSERT INTO users (username, name, surname, mail, password) VALUES ($1, $2, $3, $4, $5)";
const removeUserQuery = "DELETE FROM users WHERE id = $1"
const updateUserQuery = "UPDATE users SET name = $1 WHERE id = $2";

module.exports = {
    getUsersQuery,
    getUserByIdQuery,
    getUserByUsernameQuery,
    checkMailExistsQuery,
    checkUsernameExistsQuery,
    addUsersQuery,
    removeUserQuery,
    updateUserQuery
};