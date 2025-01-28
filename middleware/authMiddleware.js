const jwt = require("jsonwebtoken");

const auth = (req,res,next) => {
    const token = req.header("authorization");

    if(!token) res.status(401).json({message: " no token,token authorization faile"});


    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
    }

    catch (err){
          res.status(401),json({message:"token not valid"});
    }
}

module.exports = auth