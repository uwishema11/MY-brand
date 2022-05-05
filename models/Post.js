const mongoose=require("mongoose");
const Joi = require("joi");


const postSchema=mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type:Date, defoult:Date.now
    },
    likes:{
        type:Number
    },
    image:{
       type:String
      
    },

    author:{
        type:String,
        required:true,
    },
    isPublished:Boolean
 });
 

const Post = mongoose.model("Post", postSchema);
 
const postAuthSchema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    image:Joi.string(),
    author:Joi.string().required(),
    likes: Joi.number(),
    isPublished:Joi.boolean()
})

module.exports.Post = Post;
//  module.exports.postSchema=postSchema;
module.exports.postAuthSchema = postAuthSchema;