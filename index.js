//Define env
require('dotenv').config();

//Define express
const express = require('express');
const app     = express();
const port    = 3000;

//Define moongodb connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

//Define route
const userRoutes = require('./routes/user.route');
app.use('/user', userRoutes);

app.use(express.static('public'));
app.listen(port, () => console.log(`Server start listen on port ${port}`));