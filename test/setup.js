/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const moongose= require("mongoose");
const {Post} = require("../models/Post");
const {User }=require("../models/User");
const {Comment}=require("../models/Comment")
const {Message}=require("../models/Message");

beforeEach(done => {
  User.deleteMany({}, function(err) {});
  Post.deleteMany({}, function(err) {});
  Comment.deleteMany({},function(err) {});
  Message.deleteMany({},function(err) {});
  done();
});

afterEach(done => {
    User.deleteMany({}, function(err) {});
    Post.deleteMany({}, function(err) {});
    Comment.deleteMany({},function(err) {});
    Message.deleteMany({},function(err) {});
  done();
});
