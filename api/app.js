const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const postRoutes = require('./routes/postRoutes');
app.use('/posts', postRoutes);

module.exports = app;
