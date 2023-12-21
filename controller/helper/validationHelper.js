"use strict";
((validationHelper)=>{
    let pattern = /@gmail.com/;
    let pattern1 = /^[A-Za-z]+$/;
    let pattern2 = /^(98|97)\d{8}$/;
    validationHelper.userValidation = async(requestObject) =>{
        if (requestObject.username == "" || requestObject.email == "" || requestObject.phone == "" || requestObject.password=="") {
           return false;
        }
        else if (pattern1.test(requestObject.username) == false) {
            return false;
         }
     
        else if (pattern.test(requestObject.email) == false) {
           return false;
        }
        else if (pattern2.test(requestObject.phone) == false) {
            return false;
         }
        else if(requestObject.phone.length <= 9 ){
            return false;
        }
        else{
            return true;
        }
    };
})(module.exports);