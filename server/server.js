const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.DATABASE_ACCESS;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const usersRouter = require('./routes/users');
const questionRouter = require('./routes/question');
const answerRouter = require("./routes/answer");



app.use('/users', usersRouter);
app.use('/questions',questionRouter);
app.use('/answer',answerRouter); 

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});