const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const { checkSessionTimeout } = require('./src/entities/user/user.controller');
const path = require('path');

require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(checkSessionTimeout);

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

// Configura el tipo MIME para los archivos JavaScript como módulos
// app.use((req, res, next) => {
//     if (req.url.endsWith('.js')) {
//         res.type('application/javascript');
//     }
//     next();
// });

// // Sirve archivos estáticos desde la carpeta 'dist'
// app.use(express.static(path.join(__dirname, 'dist')));

// // Maneja todas las rutas y envía el archivo index.html
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/front/index.html'));
// });




app.listen(port, () => { console.log(`App listening on port ${port}`); });

const userRoute = require('./src/entities/user/user.route');
const blogRoute = require('./src/entities/blog/blog.route');
const sectionRoute = require('./src/entities/section/section.route');
const subscriptionRoute = require('./src/entities/subscription/subscription.route');
const mailRoute = require('./src/entities/mail/mail.route');
const imageRoute = require('./src/entities/image/image.route');


app.use('/api/v1/users', userRoute);
app.use('/api/v1/blogs', blogRoute);
app.use('/api/v1/sections', sectionRoute);
app.use('/api/v1/subscriptions', subscriptionRoute);
app.use('/api/v1/images', imageRoute);
app.use('/api/v1/mail', mailRoute);
app.use('/uploads', express.static('uploads'));
