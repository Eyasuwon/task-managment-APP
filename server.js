const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const config = require('.config');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

const PORT = config.port;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
