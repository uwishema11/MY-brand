const { Post, postAuthSchema } = require('../models/Post');


 const postPost= async function(req,res,next){
       
   const blog = await Post.create(req.body);
   res.status(201).json({
       success: true,
       result: blog
   })
 };

 const getPost=async function(req,res,next){
    try{
        const posts = await Post.find();
        res.status(200).json({
            success: true,
            posts: posts
        }) 
    }catch(err) {
        res.status(400).json({
            success: false,
            error: err.message
        })
    }

 };
 const getPostById= async function(req,res,next){
    try{
        const post = await Post.find({_id: req.params.id});
        res.status(200).json({
            success: true,
            post: post
        })
    }catch(err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
 };
 const deletePost= async function(req,res,next){
    try{
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'deleted'
        })
    }catch(err) { 
        res.status(400).json({
            success: false,
            error: err.message
        });
    };
 };
 const putPost= async function(req,res,next){
    try{
        const updated = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({
            success: true,
            post: updated
        })
    }catch(err) {
        res.status(400).json({
            success: false,
            error: err.message
        });
    };
 };

 module.exports={
     postPost,
     getPost,
     getPostById,
     deletePost,
     putPost

 }