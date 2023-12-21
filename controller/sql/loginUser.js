"use strict";
(()=>{ 
    const helper = require("../helper/index")
    module.exports=async(call)=>{
        try {
           
            const output = await helper.mysqlHelper.query(`Select * from users where Email='${call.email}'`);
            let pass=output[0][0].Password;
            if(call.password==pass){
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