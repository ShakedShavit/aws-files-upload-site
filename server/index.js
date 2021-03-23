const express = require('express');
const cors = require('cors');
require('./db/mongoose');
const userRouter = require('./routes/user');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(userRouter);

app.listen(port, () => {
    console.log('Server connected on port:', port);
});