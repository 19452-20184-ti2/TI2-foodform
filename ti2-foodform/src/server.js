const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const cors = require('cors');
require('dotenv/config');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//Routes
const postRoutes = require('./routes/post-route');
app.use('/posts', postRoutes);
const commentRoutes = require('./routes/comment-route');
app.use('/comments', commentRoutes);


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('connected to DB!')
);

//How to we start listening to the server
const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => { console.log(`Shh... Port ${port} is listening!`) });