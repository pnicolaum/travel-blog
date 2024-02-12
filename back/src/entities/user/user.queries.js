// get
const getUsersQuery = "SELECT * FROM users";
const getUserByIdQuery = "SELECT * FROM users WHERE id = $1"
const getUserByUsernameQuery = "SELECT * FROM users WHERE username = $1";
const getHashFromUsername = "SELECT password FROM users WHERE username = $1";

// check
const checkMailExistsQuery = "SELECT id, mail FROM users WHERE mail = $1";
const checkUsernameExistsQuery = "SELECT id, username FROM users WHERE username = $1";
const checkCredentialsQuery = "SELECT username, password FROM users WHERE username = $1 AND password = $2"

// add
const addUsersQuery = "INSERT INTO users (username, name, surname, mail, password) VALUES ($1, $2, $3, $4, $5)";

// delete
const removeUserQuery = "DELETE FROM users WHERE id = $1"

// update
const updateUserQuery = "UPDATE users SET " +
    "username = COALESCE($1, username), " +
    "name = COALESCE($2, name), " +
    "surname = COALESCE($3, surname), " +
    "mail = COALESCE($4, mail), " +
    "password = COALESCE($5, password) " +
    "WHERE id = $6";



module.exports = {
    getUsersQuery,
    getUserByIdQuery,
    getUserByUsernameQuery,
    getHashFromUsername,
    checkMailExistsQuery,
    checkUsernameExistsQuery,
    checkCredentialsQuery,
    addUsersQuery,
    removeUserQuery,
    updateUserQuery
};