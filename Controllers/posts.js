const { Post, postAuthSchema } = require('../models/Post');
const cloudinary= require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECRET,
});
const storage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"DEV"
    },
});
const uploadImg = multer({storage: storage}).single('image');


 const postPost= async function(req,res,next){
     try{
         const result=await postAuthSchema.validate(req.body);
         const {error}=result
         if(error) return res.status(404).json({
             message: error.details[0].message
         });
         let post= await Post.findOne({title:req.body.title});
         if(post) return res.status(404).json({
             message:"the post already exists"
         });
        const newPost={
            body: req.body.body,
            title: req.body.title,
            image: req.file?.filename,
            author: req.body.author,
            isPublished: true
        }
        const created=await Post.create(newPost)
         res.status(200).json({
             success:true,
             result:created
         })
     }
     catch(error){
         res.status(500).json({
             error:error.message
         });
     };

 };

 const getPost=async function(req,res,next){
    try{
        const posts = await Post.find();
        res.status(200).json({
            success: true,
            posts: posts
        }) 
    }catch(err) {
        res.status(500).json({
            success: false,
            error: "server error"
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
     putPost,
     uploadImg
 }