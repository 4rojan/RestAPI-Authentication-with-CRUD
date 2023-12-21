"use strict";
(()=>{
    const get_all_records = require('../sql/getAllRecord')
    module.exports = async(req, res, next) => {
        try {
            const output2=await get_all_records();
                res.status(200).send({
                    // status:200,  //OK
                    success:true,
                     message: "The Users are:",
                     data: output2
                 })  
           
        } catch (error) {
            res.status(400).send({   // Bad Request
                success: false,
                message: "Error in retrieving data",
                error,
              });
        }
           
    }
})()