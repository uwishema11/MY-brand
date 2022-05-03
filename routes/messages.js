const express=require("express");
const res = require('express/lib/response');
const messageControllers= require("../Controllers/messages")
const router=express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Message:
 *       type: object
 *       required:
 *         - author
 *         - body
 *       properties:
 *         author:
 *           type: string
 *           description: name of the user
 *         body:
 *           type: string
 *       example:
 *         author: uwishema
 *         body: can you please help us with mocha test
 */ 
/**
 * @swagger
 * /users:
 *   get:
 *     summary: getting all  users
 *     responses:
 *       200:
 *          description: get all users
 */

/**
 * @swagger
 * /messages:
 *   get:
 *     summary: get all messages 
 *     security:
 *      - ApiKeyAuth: []
 *     tags: [Messages]
 *     responses:
 *       200:
 *         description: The lis of the messages 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /messages:
 *   post:
 *     summary: create a message
 *     responses:
 *       200:
 *          description: create a single blog
 */
/**
 * @swagger
 * /messages:
 *   post:
 *     summary: adding a message
 *     security:
 *      - ApiKeyAuth: []
 *     tags: [Message]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Message'
 *     responses:
 *       200:
 *         description: The message was successfully sent
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       500:
 *         description: Some server error
 */


router.get("/",messageControllers.getMessages);
router.post("/",messageControllers.postMessage);
module.exports=router;