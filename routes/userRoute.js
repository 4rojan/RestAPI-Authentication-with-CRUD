"use strict";

(() => {
    const express = require("express");
    const router = express.Router();

    const createRecord = require("../controller/method/createRecord");
    const getAllRecord = require("../controller/method/getAllRecord");
    const getSingleRecord = require("../controller/method/getSingleRecord");
    const updateRecord = require("../controller/method/updateRecord");
    const deleteRecord = require("../controller/method/deleteRecord");
    const loginUser = require("../controller/method/loginUser");

    router.post('/login',loginUser);
    router.post('/create_record',createRecord);
    router.get('/get_all_records',getAllRecord);
    router.get('/get_Single_record/:uuid',getSingleRecord);
    router.put('/update_record/:uuid',updateRecord);
    router.delete('/delete_record/:uuid',deleteRecord);
    
    module.exports = router;
})()