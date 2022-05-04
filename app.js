const express=require ("express");
const app=express(); 
const mongoose=require("mongoose");
const swaggerUI=require("swagger-ui-express");
const swaggerJsDoc=require("swagger-jsdoc") 
const dotenv= require('dotenv');
dotenv.config({ path: '.env' });

const connect = async () => {
    try{
       await mongoose.connect(process.env.DB_CONNECTION, 
       {
         useNewUrlParser: true, 
         useUnifiedTopology: true
       })
       console.log("db connection successful")
     }catch(err) {
       console.log(err);
     }
   }  
   
   connect();


// //IMPORT ROUTES
// mongoose.connect(process.env.DB_CONNECTION,()=>
// console.log("connected to DB")
// );
const postsRoute=require("./routes/posts");
const commentsRoute= require("./routes/comments");
const userRoute=require("./routes/users");
const likesRouter=require("./routes/likes")
const authRouter=require("./routes/auth");
const messageRouter= require("./routes/messages")

const cors=require("cors");

app.use(cors());
app.options('*',cors());
app.enable('trust proxy');



app.use(express.json())
app.get("/", (req,res)=>{
  res.json({
    message:"welcome"
  })
})
app.use("/posts",postsRoute);
app.use("/comments",commentsRoute);
app.use("/users",userRoute);
app.use("/likes",likesRouter);
app.use("/auth",authRouter);
app.use("/messages",messageRouter)

const options ={
  definition: {
    openapi:"3.0.0",
    info:{
      title:"MY BRAND API",
      version:"1.0.0",
      description:"A simple Express Library API" 
    },
    servers:[
      {
        url:"https://uwishema.herokuapp.com "
      }
    ],
  }, 
  apis:["./routes/*.js"] 
}
const specs =swaggerJsDoc(options)
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(specs))
const PORT=process.env.PORT || 7000
app.listen(PORT, ()=>{
    console.log(`app listening on ${PORT}`)
});
module.exports=app;