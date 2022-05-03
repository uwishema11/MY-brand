const { Comment,commentAuthSchema } = require('../models/Comment');

const getComment= async function(req,res,next){
    try{
        const comments=await Comment.find()
        res.status(200).json({
            success: true,
            comments: comments
        })
    }
    catch(err){
        res.status(400).json({
            success: false,
            error: err.message
        });
    };
};

const postComment= async function(req,res,next){
    const result= await commentAuthSchema.validate(req.body)

    const {error}= result;
    if(error) {
        return res.status(400).json({
           error: error.details[0].message
        })
    }
    
    const newComment = {
        body: req.body.body,
        author: req.body.author,
        post: req.params.postId
    }
    const created = await Comment.create(newComment);
    res.status(201).json({
        success: true,
        result: created
    });
};
const deleteComment= async function(req,res,next){
    try{
        await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success:true,
            message: "deleted"
        });
    }
    catch(err){
        res.status(404).json({
            success:false,
            message:err.message
        });
    };
};
 const getCommentByPost= async function(req,res,next){
    try{
        const comments = await Comment.find({post:req.params.postId});
        
        res.status(200).json({
            success:true,
            result:comments
        });
    }
    catch(err){
        res.status(400).json({
            success:false,
            message: err.message
        });
    };
 };

 module.exports={
     getComment,
     postComment,
     deleteComment,
     getCommentByPost
 }