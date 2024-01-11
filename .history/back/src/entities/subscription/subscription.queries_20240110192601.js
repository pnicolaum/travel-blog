const getSubscriptionsQuery = "SELECT * FROM subscriptions";
const checkMailExistsQuery = "SELECT * FROM subscriptions WHERE mail = $1";
const addSubscriptionsQuery =
    "INSERT INTO subscriptions (mail) VALUES ($1)";

module.exports = {
    getSubscriptionsQuery,
    checkMailExistsQuery,
    addSubscriptionsQuery,
}