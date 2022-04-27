const express=require("express");
const res = require('express/lib/response');
const { Post } = require("../models/Post");
const router=express.Router();

// to create likes

router.post("/:postId",  async function(req,res){
    
    let post= await Post.findById(req.params.postId)
    post.likes++;
    await Post.findByIdAndUpdate(req.params.postId, post);
    post.save();
    res.send(post)


});
//getting all likes

router.get("/:postId", async function(req,res){
    try{
      const post=  await Post.findById(req.params.postId)
      const likes= post.likes;
      res.status(200).json({
          success:true,
          likes:likes
      })
       
    }
    catch(error){
        res.status(404).json({
            success:false,
            error:error.deatails[0].message
        })

    }
});
module.exports=router;