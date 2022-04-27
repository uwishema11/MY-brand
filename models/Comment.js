const mongoose= require("mongoose")
const _=require("lodash")
const Joi=require("joi");
//  const postSchema=require("../models/Post")


const commentSchema= mongoose.Schema({
    body: {
        type: String,
        required: true,
        minlength: 5,
     },
    date: {
        type: Date,
        default:Date.now

    },
    author:{
        type:String,
        required:true,
     },
     post: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'Post'
     }
    // post:{
    //     type:postSchema,
    //     required:true
    // }
});
const Comment=mongoose.model("Comment",commentSchema);
const commentAuthSchema = Joi.object().keys({
    body: Joi.string().required(),
    author:Joi.string().required(),
    // postId: Joi.string().required()
})
module.exports.Comment = Comment;
module.exports.commentAuthSchema = commentAuthSchema;