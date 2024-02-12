

const auth = (req, res) => {
    if (req.session && req.session.user === "amy" && req.session.admin)
        return next();
    else
        return res.sendStatus(401);
};