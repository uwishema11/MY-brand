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
    //   try{
    //     const { error } = await schema.validate(req.body);
    //     if (error) return res.status(400).send(error.details[0].message);

   const user= await User.findOne({email:req.body.email});
   if(!user)return res.status(400).json({
    status_code:0,
    error_msg:"Invalid email or password"

})
    const validPassword= await bcrypt.compare(req.body.password,user.password)
    if(!validPassword)return res.status(400).json({
        status_code:0,
        error_msg:"Invalid email or password "
    })
    
   const token=user.generateAuthToken();
    res.send(token)
    //   }
    //   catch(error){
    //     console.log(error);
    //     res.send("An error occured");
    //   }
});
// const schema = Joi.object().keys({
//     password: Joi.string().required(),
//     email:Joi.string().min(5).max(255).required().email()
// });

module.exports=router;

