
const admin=require("../middleware/admin")
const express=require("express");
const res = require('express/lib/response');
const router=express.Router();
const auth=require("../middleware/auth")
const postControllers=require("../Controllers/posts")

//api to get all posts

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - title
 *         - body
 *         - author
 *         - image
 *       properties:
 *         title:
 *           type: string
 *           description: title of blogs 
 *         body:
 *           type: string
 *         image:
 *           type: string
 *         author:
 *           type: string
 *       example:
 *         title: developers
 *         body: challanges they meet
 *         author: Uwishema celine
 */



router.get("/",postControllers.getPost)
/**
 * @swagger
 * /posts:
 *   post:
 *     summary: create a blog
 *     responses:
 *       200:
 *          description: create a single blog
 */
/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new blog
 *     security:
 *      - ApiKeyAuth: []
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: The blog was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 */
/**
 * @swagger
 * /posts:
 *   get:
 *     summary: getting all a blog
 *     responses:
 *       200:
 *          description: get all blogs
 */
/**
 * @swagger
 * /posts:
 *   get:
 *     summary: get all blogs 
 *     security:
 *      - ApiKeyAuth: []
 *     tags: [Post]
 *     responses:
 *       200:
 *         description: The blog was successfully 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /posts:
 *   delete:
 *     summary: deleting a single blog by id 
 *     responses:
 *       200:
 *          description: get all blogs
 */
/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: delete a blog  
 *     security:
 *      - ApiKeyAuth: []
 *     parameters:
 *         - in: path
 *           name: id
 *           type: string
 *           required: true
 *     tags: [Post]
 *     responses:
 *       200:
 *         description: The blog was successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 */





router.post("/", postControllers.uploadImg,postControllers.postPost);

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Get post by id
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The blog id
 *     responses:
 *       200:
 *         description: Tthi is discription of blog by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: The book was not found
 */

/**
 * @swagger
 * /posts/{id}:
 *  put:
 *    summary: Update blog by its id
 *    security:
 *      - ApiKeyAuth: []
 *    tags: [Post]
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
 *            $ref: '#/components/schemas/Post'
 *    responses:
 *      200:
 *        description: The blog was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      404:
 *        description: The blog was not found
 *      500:
 *        description: Some error happened
 */


router.get('/:id', postControllers.getPostById);

//api to delete post

router.delete('/:id', [auth,admin],postControllers.getPostById);


router.put('/:id',postControllers.putPost);

module.exports=router;