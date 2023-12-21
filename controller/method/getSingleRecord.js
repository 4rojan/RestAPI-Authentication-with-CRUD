"use strict";
(()=>{
    const get_single_record = require('../sql/getSingleRecord')
    module.exports = async(req, res, next) => {
        try {
            let uuid = req.params.uuid;
            const output2=await get_single_record(uuid);
                res.status(200).send({
                    // status:200,  //OK
                    success:true,
                     message: "The Selected User is:",
                     data: output2
                 })  
           
        } catch (error) {
            res.status(404).send({   //Record not found
                success: false,
                message: "Record not found",
                error,
              });
        }
           
    }
})()