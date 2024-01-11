const getUsersQuery = "SELECT * FROM users";
const getUserByIdQuery = "SELECT * FROM users WHERE id = $1"
const checkMailExistsQuery = "SELECT s FROM users s WHERE s.mail = $1";
const addUserQuery = "INSERT INTO users (nick, name, surname, mail, password, phone, dob, nationality, gender) VALUE ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

module.exports = {
    getUsersQuery,
    getUserByIdQuery,
    checkMailExistsQuery,
    addUserQuery,
};