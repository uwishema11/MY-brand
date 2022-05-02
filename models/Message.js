const Joi = require("joi");
const mongoose= require("mongoose")

const messageSchema=mongoose.Schema({
    arthur:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
});
 const Message= mongoose.model("Message",messageSchema)
 const messageAuthSchema= Joi.object.keys({
     arthur: Joi.string().required(),
     body:Joi.string().required()
 })
 module.exports.Message=Message
 module.exports.messageAuthSchema=messageAuthSchema