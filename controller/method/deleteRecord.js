"use strict";
(()=>{
    const deleteRecord = require('../sql/deleteRecord')
    module.exports = async(req, res, next) => {
        try {
            let uuid = req.params.uuid;
            const output2=await deleteRecord(uuid);
            if(output2 == true){
                res.status(200).send({
                    // status:200,  //OK
                    success:true,
                     message: "The User has been deleted from database:",
                 })  
            }
            else{
                res.status(400).send({   //Bad Request
                    success: false,
                    message: "Error occurs while deleting record"
                  });    
            }
              
           
        } catch (error) {
            res.status(500).send({   // Internal Server Error
                success: false,
                message: "Error occurs in server",
                error,
              });
        }
           
    }
})()