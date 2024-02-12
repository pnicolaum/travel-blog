// get
const getUsersQuery = "SELECT * FROM users";
const getUserByIdQuery = "SELECT * FROM users WHERE id = $1"
const getUserByUsernameQuery = "SELECT * FROM users WHERE username = $1";

// check
const checkMailExistsQuery = "SELECT s FROM users s WHERE s.mail = $1";
const checkUsernameExistsQuery = "SELECT s FROM users s WHERE s.username = $1";

// add
const addUsersQuery =
    "INSERT INTO users (username, name, surname, mail, password) VALUES ($1, $2, $3, $4, $5)";

// delete
const removeUserQuery = "DELETE FROM users WHERE id = $1"

// update
// const updateUserQuery = "UPDATE users SET name = $1 WHERE id = $2";
// const updateUserQuery = "UPDATE users SET " +
//     "username = COALESCE($1, username), " +
//     "name = COALESCE($2, name), " +
//     "surname = COALESCE($3, surname), " +
//     "mail = COALESCE($4, mail), " +
//     "password = COALESCE($5, password) " +
//     "WHERE id = $6";

const updateUserQuery =
    "UPDATE users SET " +
    "username = CASE WHEN $1 IS NOT NULL THEN $1 ELSE username END, " +
    "name = CASE WHEN $2 IS NOT NULL THEN $2 ELSE name END, " +
    "surname = CASE WHEN $3 IS NOT NULL THEN $3 ELSE surname END, " +
    "mail = CASE WHEN $4 IS NOT NULL THEN $4 ELSE mail END, " +
    "password = CASE WHEN $5 IS NOT NULL THEN $5 ELSE password END " +
    "WHERE id = $6";

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