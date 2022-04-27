
const express=require("express");
const res = require('express/lib/response');
const CommentControllers= require("../Controllers/comments")
const router=express.Router();
//api to get all comments


 
/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - author
 *         - body
 *       properties:
 *         author:
 *           type: string
 *           description: author of the comment
 *         post:
 *           type: string
 *           description: postid of the post
 *         body:
 *           type: string
 *       example:
 *         author: uwishema
 *         body: keep pushing haedwork pays
 *         post: 626172c64cae9cc144262bc8
 */ 


/**
 * @swagger
 * /comments:
 *   get:
 *     summary: getting all  comments
 *     responses:
 *       200:
 *          description: get all comments
 */
/**
 * @swagger
 * /comments:
 *   get:
 *     summary: get all comments 
 *     security:
 *      - ApiKeyAuth: []
 *     tags: [Comment]
 *     responses:
 *       200:
 *         description: These are the comments 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       500:
 *         description: Some server error
 */


/**
 * @swagger
 * /comments/{id}:
 *  post:
 *    summary: comment blog by its id
 *    security:
 *      - ApiKeyAuth: []
 *    tags: [Comment]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The blog id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Comment'
 *    responses:
 *      200:
 *        description: The Comment was successful made
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Comment'
 *      404:
 *        description: The blog was not found
 *      500:
 *        description: Some error happened
 */
/**
 * @swagger
 * /comments/{Id}:
 *   get:
 *     summary: get all  comments on single post  
 *     security:
 *      - ApiKeyAuth: []
 *     parameters:
 *         - in: path
 *           name: id
 *           type: string
 *           required: true
 *     tags: [Comment]
 *     responses:
 *       200:
 *         description: The comments on the post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       500:
 *         description: Some server error
 */
/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     summary: delete a  comments on post  
 *     security:
 *      - ApiKeyAuth: []
 *     parameters:
 *         - in: path
 *           name: id
 *           type: string
 *           required: true
 *     tags: [Comment]
 *     responses:
 *       200:
 *         description: The comment successful deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       500:
 *         description: Some server error
 */
router.get("/",CommentControllers.getComment);
router.post("/:postId",CommentControllers.postComment);
router.get("/:postId",CommentControllers.getCommentByPost);
router.delete("/:id", CommentControllers.deleteComment);
module.exports=router;