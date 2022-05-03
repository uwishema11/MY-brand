const res = require("express/lib/response");
const { messageAuthSchema, Message } = require("../models/Message")

const postMessage= async function(req,res,next){
    try{
        const result= await messageAuthSchema.validate(req.body);
        
    const {error}=result;
    if(error)return res.status(404).json({
        error:error.details[0].message
    });
    const newMessage={
        author:req.body.author,
        body:req.body.body
    };
    const created= await Message.create(newMessage)
    res.status(200).json({
        success:true,
        result:created
    });
    }
    catch(err){
        res.status(500).json({
            error:"server error"
        });
    };
};
const getMessages= async function(req,res,next){
    try{
        const messages=await Message.find();
        res.status(200).json({
            success:true,
            result:messages
        });
    }
    catch(error){
        res.status(404).json({
            success:false,
            error:error.message
        });
    };
};


module.exports={
    postMessage,
    getMessages
}