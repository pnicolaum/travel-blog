
const getLogin = (req, res) => {
    if (!req.query.username || !req.query.password) {
        res.send('login failed');
    } else if (req.query.username === "amy" || req.query.password === "amyspassword") {
        req.session.user = "amy";
        req.session.admin = true;
        res.send("login success!");
    }
}