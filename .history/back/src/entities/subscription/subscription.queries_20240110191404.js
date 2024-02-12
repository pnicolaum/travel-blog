const getSubscriptionsQuery = "SELECT * FROM subscriptions";
const checkMailExistsQuery = "SELECT s FROM subscriptions s WHERE s.mail = $1";
const addSubscriptionsQuery =
    "INSERT INTO subscriptions (mail) VALUE ($1)";

module.exports = {
    getSubscriptionsQuery,
    checkMailExistsQuery,
    addSubscriptionsQuery,
}