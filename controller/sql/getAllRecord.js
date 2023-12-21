"use strict";
(()=>{
    const helper = require("../helper/index")
    module.exports = async(req, res, next) => {
       try {
        let sqlquery = "select * from users";
        let [result] = await helper.mysqlHelper.query(sqlquery); 
        return result
       } catch (error) {
        console.log(error);
       }
      
           
       
    }
})()