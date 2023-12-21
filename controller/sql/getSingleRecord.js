"use strict";
(()=>{
    const helper = require("../helper/index")
    module.exports = async(uuid) => {
       try {
        let sqlquery = `select * from users where uuid ='${uuid}'`;
        let [result] = await helper.mysqlHelper.query(sqlquery); 
        return result
       } catch (error) {
        console.log(error);
       }
      
           
       
    }
})()