const express = require("express");
const app = express();

const routerIndex = require('./route');
const routerUser = require('./route/user');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//router
app.use('/', routerIndex);
app.use('/user', routerUser);


app.listen(3002, () => {
    console.log("server start");
});