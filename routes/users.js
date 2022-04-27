
const auth=require("../middleware/auth");
const _ =require("lodash");
const bcrypt= require("bcrypt")
const express = require('express');
const { result } = require("lodash");
const admin = require("../middleware/admin");
const userController= require("../Controllers/register")
const router = express.Router();


 
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: name of the user
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         name: developers
 *         email: developers@gmail.com
 *         password: 12345
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
 * /users:
 *   get:
 *     summary: get all users 
 *     security:
 *      - ApiKeyAuth: []
 *     tags: [User]
 *     responses:
 *       200:
 *         description: The lis of the users 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: create a blog
 *     responses:
 *       200:
 *          description: create a single blog
 */
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Regitser a new user
 *     security:
 *      - ApiKeyAuth: []
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The User was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */
/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a  user
 *     security:
 *      - ApiKeyAuth: []
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was successfully Deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */
router.post("/",userController.signUp);
router.get("/me",auth,userController.getCurrentUser);
router.get("/",userController.getAllUsers);
 
 

    //    user= new User({
    //        name:req.body.name,
    //        email:req.body.email,
    //        password:req.body.password
    //    }); 
    //    let created= await User.create(user);
    //    res.status(201).json({ 
    //        success: true,
    //        result: created
    //    })



router.delete('/:id', [auth,admin], async function(req,res) {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'deleted'
        })
    }catch(err) { 
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
})
module.exports =router;