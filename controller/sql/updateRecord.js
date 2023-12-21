"use strict";
(()=>{
    const helper = require("../helper/index")
    module.exports = async(call) => {
       try {
        let myDate = new Date().getTime();
        let sqlquery = `UPDATE users set Name = '${call.username}', Email = '${call.email}', Phone_Number = '${call.phone}', updated_at = '${myDate}' where uuid ='${call.uuid}'`;
        let result = await helper.mysqlHelper.query(sqlquery); 
       if(result[0].affectedRows > 0){
        return true
       }
       else {
        return false
       }
       } catch (error) {
        console.log(error);
       }
      
           
       
    }
})()