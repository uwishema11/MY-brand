const {User, userAuthSchema }=require("../models/User");


//to regitser a new user
const signUp= async function(req,res,next){
    const result=await userAuthSchema.validate(req.body);
    const{error}=result;
    if(error){
        res.status(404).json({
            error:error.details[0].message
        });
    };
let user= await User.findOne({email:req.body.email});
   if(user){
       res.status(400).send("user already registered")
   };
   user= new User(_.pick(req.body,["_id","email","name"])); 
   const salt =await bcrypt.genSalt(10);
   user.password= await bcrypt.hash("user.password",salt);
   await user.save();
   const token=user.generateAuthToken(); 
   res.header("x-auth-token", token).send(_.pick(user,["name","email"]));
};

// to get current user
const getCurrentUser= async function(req,res,next){
    const user=await User.findById(req.user._id).select("-password");
res.send(user) 
};

// to get all registerd users
const getAllUsers= async function(req,res,next){
    try{
        const users = await User.find().select("-password");
        res.status(200).json({
            success: true,
            users: users
        }) 
    }catch(err) {
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
}


module.exports={
    signUp,
    getCurrentUser,
    getAllUsers
};
