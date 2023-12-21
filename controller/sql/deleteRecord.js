"use strict";
(()=>{
    const helper = require("../helper/index")
    module.exports = async(uuid) => {
       try {
        let sqlquery = `Delete from users where uuid ='${uuid}'`;
        let result = await helper.mysqlHelper.query(sqlquery); 
        if(result[0].affectedRows > 0){
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