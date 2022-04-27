const express=require ("express");
const app=express(); 
const mongoose=require("mongoose");
const swaggerUI=require("swagger-ui-express");
const swaggerJsDoc=require("swagger-jsdoc") 


const connect = async () => {
    try{
       await mongoose.connect('mongodb://localhost/MyBrand', 
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
// require("dotenv/config");

// //IMPORT ROUTES
// mangoose.connect(process.env.DB_CONNECTION,()=>
// console.log("connected to DB")
// );
const postsRoute=require("./routes/posts");
const commentsRoute= require("./routes/comments");
const userRoute=require("./routes/users");
const likesRouter=require("./routes/likes")
const authRouter=require("./routes/auth");
const dotenv= require('dotenv');
dotenv.config({ path: '.env' });
const cors=require("cors");

app.use(cors())


app.use(express.json())
app.use("/posts",postsRoute);
app.use("/comments",commentsRoute);
app.use("/users",userRoute);
app.use("/likes",likesRouter);
app.use("/auth",authRouter);

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
        url:"http://localhost:7000 "
      }
    ],
  }, 
  apis:["./routes/*.js"] 
}
const specs =swaggerJsDoc(options)
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(specs))

app.listen(7000, ()=>{
    console.log('app listening on port 7000')
});
module.exports=app;