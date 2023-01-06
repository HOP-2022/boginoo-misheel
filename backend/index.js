const express = require("express");
const port = 8000;
const app = express();
const userRoute = require('./router/user');
const connect = require('./database')
connect()

app.use(express.json());
app.use('/user', userRoute);
// app.use('/comment', commentRoute);

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});