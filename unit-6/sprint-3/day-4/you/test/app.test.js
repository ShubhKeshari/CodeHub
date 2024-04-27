const chai = require("chai");
const { server } = require("../index");
const chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);
describe("Testing API",()=>{
    let finalScore = 1;
    describe("GET /users",()=>{
        it("should get all the users",(done)=>{
            chai.request(server)
                .get("/users")
                .end((err,response)=>{
                    response.should.have.status(200)
                    response.body.should.be.a("array")
                    response.body.should.have.length.above(1)
                    finalScore += 2
                    console.log("FinalScore: ",finalScore)
                    done()
                })
        })
    })
    // describe("GET /users/:userID",()=>{
    //     it("should get the user by id",(done)=>{
    //         chai.request(server)
    //             .get("/users/:userID")
    //             .end((err,response)=>{
    //                 response.should.have.status(200)
    //                 response.body.should.be.a("object")
    //                 response.body.should.have.property("name")
    //                 response.body.should.have.property("email")
    //                 response.body.should.have.property("password")
    //                 err.should.have.status(500)
    //                 finalScore += 2
    //                 console.log("FinalScore: ",finalScore)
    //                 done()
    //             })
    //     })
    // })
})