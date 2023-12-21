"use strict";
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mysqlHelper = require("./common/mysqlhelper");
const mainroute = require("./routes/userRoute")
require('dotenv').config()
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());
app.use("/api",mainroute);

let port = process.env.PORT || 8000;
app.listen(port, ()=>
    {
    mysqlHelper.init();  
    console.log(`Server running on the port ${port}`);
    }
)

module.exports = app; // Export the Express app instance