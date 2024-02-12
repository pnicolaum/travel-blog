const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const { checkSessionTimeout } = require('./src/entities/user/user.controller');

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



