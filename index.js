const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/samane")
.then(()=>console.log("connected."))
.catch(()=>console.log("couldn't connect."))



const port = process.env.PORT || 3000;

app.listen(port ,()=>console.log(`connect to port ${port}`));