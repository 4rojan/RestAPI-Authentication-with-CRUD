"use strict";
(()=>{
    const updateRecord = require('../sql/updateRecord')
    module.exports = async(req, res, next) => {
        try {
            const obj ={
                username:req.body.Name,
                email:req.body.Email,
                phone:req.body.Phone_Number,
                uuid:req.params.uuid            
            }
            const output2=await updateRecord(obj);
            if(output2 == true){
                res.status(200).send({
                    // status:200,  //OK
                    success:true,
                     message: "The User has been updated Successfully",
                 })  
            }
            else{
                res.status(400).send({   // Bad Request
                    success: false,
                    message: "Error in updating record",
                  });
            }
           
        } catch (error) {
            res.status(500).send({   // Internal Server Error
                success: false,
                message: "Error",
                error,
              });
        }
           
    }
})()