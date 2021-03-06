const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
//const expressValidator = require('express-validator');
require('dotenv').config();

//import router
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');

//app
const app = express();
const port = process.env.PORT || 8000;

//db
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MONGODB Connected.'))
  .catch((err) => console.log(err));

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(expressValidator());
app.use(cors());

//routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
