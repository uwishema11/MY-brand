/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const moongose= require("mongoose");
const { config }=  require('dotenv');
const {Post,postAuthSchema} = require("../models/Post");
const {User, userAuthSchema }=require("../models/User");
const {Comment}=require("../models/Comment")

config({ path: '.env' });

const DB_TEST = "mongodb+srv://uwishema11:uwishema@cluster0.b4eee.mongodb.net/myFirstDatabase_test?retryWrites=true&w=majority"

 moongose.connect(DB_TEST).then(() => console.log('Test DB connected successful !'));

beforeEach(done => {
  User.deleteMany({}, function(err) {});
  Post.deleteMany({}, function(err) {});
  Comment.deleteMany({},function(err) {});
  done();
});

afterEach(done => {
    User.deleteMany({}, function(err) {});
    Post.deleteMany({}, function(err) {});
    Comment.deleteMany({},function(err) {});
  done();
});
