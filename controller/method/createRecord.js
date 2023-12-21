"use strict";
(()=>{
    const create_record = require('../sql/createRecord')
    const helper = require("../helper/index")
    module.exports = async(req, res, next) => {
        try {
         
            const requestObject = {
                username: req.body.Name,
                 email: req.body.Email,
                 password: req.body.Password,
                 phone: req.body.Phone_Number
              };
           
            let output = await helper.validationHelper.userValidation(requestObject);
            if(output == true){
                const output2 = await create_record(requestObject);
                if(output2==true){

                    res.status(201).send({  //created
                        //status: 201, //created
                        success:true,
                        message:"Created Record Successful"
                    })
                }else{
                    res.status(400).send({
                        //status: 400,  //bad request
                        success:false,
                        message: 'Creating Record UnSuccessful'
                    })
                
                }
                }
                else{
                    res.status(406).send({  //Not acceptable, doesn't meet the server criteria for acceptability
                        success: false,
                       // status: 406, //Not acceptable
                        message:'Please provide appropriate data'});
                }         
                
        } catch (error) {
            res.status(500).send({ //Internal Server Error
                success: false,
                //status: 500, 
                message:'Internal Server Error',
                error
            });
              //500 internal server error : The server encountered an internal error or misconfiguration and was unable to complete your request while login into system.
        }
       
    }
})()