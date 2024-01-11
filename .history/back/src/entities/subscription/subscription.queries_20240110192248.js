const getSubscriptionsQuery = "SELECT * FROM subscriptions";
const getMailById = "SELECT * FROM subscriptions WHERE id = $1"
const addSubscriptionsQuery =
    "INSERT INTO subscriptions (mail) VALUES ($1)";

module.exports = {
    getSubscriptionsQuery,
    getMailById,
    addSubscriptionsQuery,
}