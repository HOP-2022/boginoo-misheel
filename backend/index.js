const express = require("express");
const cors = require('cors');
const app = express();
const port = 8000;
const boginooRoute = require('./router/user');
const connect = require('./database')
connect()

const corsOptions = {
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/', boginooRoute);

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});