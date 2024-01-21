const db = require('./db');

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => { console.log(`Example app listening on port ${port}`); });

app.get('/', (req, res) => {
    res.send('Hello World!');
});


const userRoute = require('./src/entities/user/user.route');
const blogRoute = require('./src/entities/blog/blog.route');
const sectionRoute = require('./src/entities/section/section.route');
const subscriptionRoute = require('./src/entities/subscription/subscription.route');
const imageRoute = require('./src/entities/image/image.route');

app.use('/api/v1/users', userRoute);
app.use('/api/v1/blogs', blogRoute);
app.use('/api/v1/sections', sectionRoute);
app.use('/api/v1/subscriptions', subscriptionRoute);
app.use('/api/v1/images', imageRoute);
app.use("uploads", express.static('uploads'));


