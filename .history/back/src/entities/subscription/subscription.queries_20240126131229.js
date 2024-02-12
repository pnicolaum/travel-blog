const getSubscriptionsQuery = "SELECT * FROM subscriptions";

const getMailByMailQuery = "SELECT * FROM subscriptions WHERE mail = $1";
const addSubscriptionsQuery =
    "INSERT INTO subscriptions (mail) VALUES ($1)";
const getMailByIdQuery = "SELECT * FROM subscriptions WHERE id = $1"
// const removeSubscriptionQuery = "DELETE FROM subscriptions WHERE id = $1"
const removeSubscriptionByMailQuery = "DELETE FROM subscriptions WHERE mail = $1"

module.exports = {
    getSubscriptionsQuery,
    getMailByMailQuery,
    addSubscriptionsQuery,
    getMailByIdQuery,
    removeSubscriptionByMailQuery
    // removeSubscriptionQuery
}