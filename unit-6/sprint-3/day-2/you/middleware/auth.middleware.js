const jwt = require('jsonwebtoken');
const auth = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    if(token){
        jwt.verify(token,"masai",(err,decoded)=>{
            if(decoded){
                console.log(decoded);
                next();
            }else{
                res.json({error})
            }
        })

    }else{
        res.json({"Please Login"});
    }
}

module.exports = {
    auth
}