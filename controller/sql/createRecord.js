"use strict";
const helper = require("../helper/index");
(()=>{
        module.exports=async(call)=>{
            try {
                let myDate = new Date().getTime(); //epoch value
                const { v4: uuidv4 } = require('uuid'); //super key
               
                const output = await helper.mysqlHelper.query(`INSERT INTO users (uuid,Name,Email,Password,Phone_Number,created_at) VALUES ('${uuidv4()}','${call.username }','${call.email}','${call.password}','${call.phone}',${myDate})`);
                 console.log(output[0].affectedRows>0);
                 if(output[0].affectedRows>0){
                     return true
                 }
                 else{
                     return false
                 }          
            } catch (error) {
                console.log(error);
            }
      
    }
})()