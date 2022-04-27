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
    }

    // author:{
    //     type:String,
    //     required:true,
    // },
    // isPublished:Boolean,
 });

const Post = mongoose.model("Post", postSchema);
// async function createPost(){
//     const post= new Post({
//         title:"Network toplogy",
//         body: "how computers are arragnged on a network",
//         author: "Shema",
//         isPublished: true
//     });
//     const result=await post.save(); 
//     console.log(result);
// }
// createPost();
 
const postAuthSchema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    likes: Joi.number()
})

module.exports.Post = Post;
//  module.exports.postSchema=postSchema;
module.exports.postAuthSchema = postAuthSchema;