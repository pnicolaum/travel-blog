const getSubscriptionsQuery = "SELECT * FROM subscriptions";
const getMailByIdQuery = "SELECT * FROM subscriptions WHERE id = $1"
const addSubscriptionsQuery =
    "INSERT INTO subscriptions (mail) VALUES ($1)";

module.exports = {
    getSubscriptionsQuery,
    getMailByIdQuery,
    addSubscriptionsQuery,
}