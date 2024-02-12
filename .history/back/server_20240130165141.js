const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

app.listen(port, () => { console.log(`Example app listening on port ${port}`); });

app.get('/', (req, res) => {
    res.send('Hello World!');
});


const userRoute = require('./src/entities/user/user.route');
const blogRoute = require('./src/entities/blog/blog.route');
const sectionRoute = require('./src/entities/section/section.route');
const subscriptionRoute = require('./src/entities/subscription/subscription.route');
const mailRoute = require('./src/entities/mail/mail.route');
const imageRoute = require('./src/entities/image/image.route');
// const authRoute = require('./src/entities/auth/auth.route');
// const loginRoute = require('./src/entities/login/login.route');

app.use('/api/v1/users', userRoute);
app.use('/api/v1/blogs', blogRoute);
app.use('/api/v1/sections', sectionRoute);
app.use('/api/v1/subscriptions', subscriptionRoute);
app.use('/api/v1/images', imageRoute);
app.use('/api/v1/mail', mailRoute);
// app.use('/api/v1/auth', authRoute);
// app.use('/api/v1/login', loginRoute);
app.use('/uploads', express.static('uploads'));


