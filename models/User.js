const mongoose=require("mongoose")
const Joi=require("joi");
const jwt=require("jsonwebtoken");
const { min } = require("lodash");
const userSchema=mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        minlength:5,
        maxlength:255
    },
    isAdmin:Boolean

});
userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id, isAdmin:this.isAdmin},process.env.JWT_SECRET)
    return token;
}
const User= mongoose.model("User",userSchema);
const userAuthSchema = Joi.object().keys({
    name: Joi.string().required(),
    password: Joi.string().min(5).max(10).required(),
    email:Joi.string().min(5).max(255).required().email()
});
module.exports.User=User;
module.exports.userAuthSchema=userAuthSchema;