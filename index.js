const express = require("express");
const app = express();


const config = require("config");
const cookieParser = require("cookie-parser");
const session = require('express-session');
const flash = require("connect-flash");

const mongoose = require("mongoose");
const router = require("./src/routes");
const methodOverride = require('method-override');

mongoose.connect("mongodb://127.0.0.1:27017/samane")
.then(()=>console.log("connected."))
.catch(()=>console.log("couldn't connect."))

app.use(methodOverride('_method'));
app.use(cookieParser(config.get("cookie-secret")));
app.use(session({
    secret: config.get("session-secret"),
    resave: true,
    saveUninitialized: true
}));

app.use(flash())

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");

app.use('/',router);

const port = process.env.PORT || 3000;

app.listen(port ,()=>console.log(`connect to port ${port}`));