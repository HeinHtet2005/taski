const {validationResult} = require('express-validator')

const handleMessage = (req,res,next)=>{
    const result = validationResult(req);
   if (!result.isEmpty){
    res.status(400).json({errors:result.mapped()})
   }else{
    next()
   }
}

module.exports = handleMessage;
