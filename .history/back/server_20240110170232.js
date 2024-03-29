const db = require('./db');

const userRoute = require('./src/entities/user/user.route.ts');
const blogRoute = require('./src/entities/user/blogs.route.ts');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => { console.log(`Example app listening on port ${port}`); });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/v1/users', userRoute);
app.use('/api/v1/blogs', blogRoute);
