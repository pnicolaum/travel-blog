const getSubscriptionsQuery = "SELECT * FROM subscriptions";
const checkMailExistsQuery = "SELECT s FROM users s WHERE s.mail = $1";
const addSubscriptionsQuery =
    "INSERT INTO subscriptions (mail) VALUES ($1)";

module.exports = {
    getSubscriptionsQuery,
    checkMailExistsQuery,
    addSubscriptionsQuery,
}