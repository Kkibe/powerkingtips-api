const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();

const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const tipsRoute = require('./routes/tip');
const postRoute = require('./routes/post');
const payRoute = require('./routes/stripe');


app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('connected');
  })
  .catch((error) => {
    console.log(error); 
  });


app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/tips', tipsRoute);
app.use('/api/blogs', postRoute);
app.use('/api/checkout', payRoute);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});