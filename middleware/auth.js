const jwt=require("jsonwebtoken");
const detenv= require("dotenv");

function auth(req,res,next){
    const token=req.header("x-auth-token")
    if(!token) return res.status(401).send("access denied.No token provided.")
    
    try{
        const decoded=jwt.verify(token, process.env.JWT_SECRET);
        req.user=decoded;
        next(); 
    }
    catch(ex){
        res.status(400).send("invalid token")
    }
}
module.exports=auth;