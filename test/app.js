const app=require("../app")
let chaiHttp=require("chai-http");
 const expect=require("chai").expect;
const chai=require("chai");
chai.use(chaiHttp);


describe("Test to get all posts ",()=>{
    it("It should return all posts",(done)=>{
        chai.request(app)
        .get("/posts")
        .end((err,res)=>{
            expect(res.status).to.be.equal(200);
            expect(res.body).to.be.a("object");
            expect(res.body.length).not.to.equal(0)
            done();
        })
    }).timeout(30000);
    


    it("It should get post by Id",(done) =>{
        chai.request(app)
        .get("/posts")
        .end((req,res)=>{
            expect(res.status).to.be.equal(200);
             expect(res.body).to.be.a("object");
             expect(res.body).to.include.keys("posts", "success", );
          
            done();
        });
    }).timeout(30000);
    

    it("should return a post when the all request is valid",(done)=>{
        let post={
            title:"test post",
            body: "test body"
        };
        chai.request(app)
        .post("/posts")
        .send(post)
        .end((req,res)=>{
            expect(res.status).to.equal(201)
            expect(res.body).to.be.a("object");
            expect(res.body).to.include.keys("result", "success", );
            
            done();
        });
    }).timeout(30000);

    it("should get users",(done)=>{
        chai.request(app)
        .get("/users")
        .end((err,res)=>{
            expect(res.status).to.be.equal(200);
            expect(res.body).to.be.a("object");
            expect(res.body.length).not.to.equal(0)
            done();
        });
    }).timeout(30000);

    it("should post users",(done)=>{
        let user= {
            email:"jesuschrist@gmail.com",
            name:"Jesus Christ",
            password:"12345"
        }
        chai.request(app)
        .post("/users")
        .send(user)
        .end((req,res)=>{
           
            expect(res.body).to.be.a("object");
            expect(res.body.length).not.to.be.equal(0)
            done();
        });
    }).timeout(30000);

    it("should get all comments",(done)=>{
        chai.request(app)
        .get("/comments")
        .end((err,res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body).to.be.a("object");
            expect(res.body).to.not.equal(0)
            done()
        });
    }).timeout(30000);

    it("should post comments",(done)=>{
        chai.request(app)
        .post("/comments")
        .send({author:"shema",body:"helloo",})
        .end((err,res)=>{
            expect(res.status).to.be.equal(404)
            expect(res.body).to.be.a("object");
            expect(res.body.result).to.not.equal(0)
            done()
        });
    }).timeout(30000);
    

    it("should delete post comment", (done)=>{

        chai.request(app)
        .delete("/comments")
        .end((req,res)=>{
        
            done()
        });
    }).timeout(30000);

});


