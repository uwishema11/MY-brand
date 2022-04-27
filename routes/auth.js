const config=require("config");
const auth=require("../middleware/auth");
const _ =require("lodash");
const bcrypt= require("bcrypt");
const {User}=require("../models/User")
const express = require('express');
const router = express.Router();
const Joi = require('joi')
const dotenv=require("dotenv")

 
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
 *   post:
 *     summary: Logging in
 *     responses:
 *       200:
 *          description: login a registered user
 */
/**
 * @swagger
 * /auth:
 *   post:
 *     summary: login a user
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
 *         description: The User was successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */


router.post("/", async function (req,res){
    
   const user= await User.findOne({email:req.body.email});
   if(!user){
       res.status(400).send("Invalid email or password")
   };
    const validPassword= await bcrypt.compare(req.body.password,user.password)
    if(!validPassword){
        res.status(400).send("Invalid email or password")
    }
   const token=user.generateAuthToken();
    res.send(token)
});

module.exports=router;

