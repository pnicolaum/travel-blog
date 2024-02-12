const db = require('./db');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => { console.log(`Example app listening on port ${port}`); });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Middleware para verificar el token JWT
function authenticateToken(req, res, next) {
    const token = req.header('Authorization');

    if (!token) return res.status(401).json({ message: 'Acceso no autorizado' });

    jwt.verify(token, 'tu_secreto', (err, user) => {
        if (err) return res.status(403).json({ message: 'Token no válido' });

        req.user = user;
        next();
    });
}

const userRoute = require('./src/entities/user/user.route');
const blogRoute = require('./src/entities/blog/blog.route');
const sectionRoute = require('./src/entities/section/section.route');
const subscriptionRoute = require('./src/entities/subscription/subscription.route');

app.use('/api/v1/users', userRoute);
app.use('/api/v1/blogs', blogRoute);
app.use('/api/v1/section', sectionRoute);
app.use('/api/v1/subscription', subscriptionRoute);