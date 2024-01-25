const getSubscriptionsQuery = "SELECT * FROM subscriptions";

const checkMailExistsQuery = "SELECT * FROM subscriptions WHERE mail = $1";
const addSubscriptionsQuery =
    "INSERT INTO subscriptions (mail) VALUES ($1)";
const getMailByIdQuery = "SELECT * FROM subscriptions WHERE id = $1"
const removeSubscriptionQuery = "DELETE FROM subscriptions WHERE id = $1"

module.exports = {
    getSubscriptionsQuery,
    checkMailExistsQuery,
    addSubscriptionsQuery,
    getMailByIdQuery,
    removeSubscriptionQuery
}