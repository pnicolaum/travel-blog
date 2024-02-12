const getSubscriptionsQuery = "SELECT * FROM subscriptions";
const addSubscriptionsQuery =
    "INSERT INTO subscriptions (mail) VALUE ($1)";

module.exports = {
    getSubscriptionsQuery,
    addSubscriptionsQuery,
}