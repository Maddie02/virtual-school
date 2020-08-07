const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const studentRouter = require('./routes/student');
const postRouter = require('./routes/post');

require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors({
    exposedHeaders: "Authorization"
}));
app.use(express.json());

// Database connection
const uri = process.env.DB_URI;

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.once('open', () => {
    console.log('MongoDB connected!');
})

app.use('/api/', studentRouter);
app.use('/api/post', postRouter);

app.listen(port, () => console.log(`App running on port ${port}`));
