"use strict";

(() => {
    const check_user = require("./../sql/loginUser");

    module.exports = async(req, res, next) => {
      try {
        const obj = {
          email: req.body.Email,
          password: req.body.Password
        }
    
        const data = await check_user(obj);
        if(data==true){
            res.status(200).send({
                success: true,
                message: "Login success"
            })
        }else{
            res.status(401).send({
                success: false,
                message: "Unauthorized "
            })

        }

      } catch (error) {
        res.status(500).send({
                //401 means unauthorized
                  success: false,
                message: "Internal Server Error ",
                error,
      });
    }
  }
  })()