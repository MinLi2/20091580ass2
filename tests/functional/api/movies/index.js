import chai from "chai";
import request from "supertest";
import api from "../../../../index";

const expect = chai.expect;

//let api;
let token;

const sampleMovie = {
  id: 508442,
  title: "Soul",
};

describe("Movies endpoint", function (){
  // beforeEach(() => {
  //   try {
  //     api = require("../../../../index");
  //   } catch (err) {
  //     console.error(`failed to Load user Data: ${err}`);
  //   }
  // });
  this.timeout(12000);
  before((done) => {
    setTimeout(() => {
      done();
    },6000);
  });
  before((done) => {
    request(api)
      .post("/api/users")
      .send({
        "username": "user1",
        "password": "test1"
      })
      .end((err, res) => {
        token = res.body.token;
        console.log(token)
        done();
      });
  });

  afterEach(() => {
    api.close();
    delete require.cache[require.resolve("../../../../index")];
  });
  describe("GET /movies ", () => {
    it("should return 20 movies and a status 200", (done) => {
      request(api)
        .get("/api/movies")
        .set("Accept", "application/json")
        .set("Authorization", token)
        .expect("Content-Type", /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.be.a("array");
          expect(res.body.length).to.equal(20);
          done();
        });
    });
  });

  describe("GET /movies/:id", () => {
     describe("when the id is valid", () => {
       it("should return the matching movie", () => {
         return request(api)
           .get(`/api/movies/${sampleMovie.id}`)
          .set("Accept", "application/json")
           .set("Authorization", token)
           .expect("Content-Type", /json/)
           .expect(200)
           .then((res) => {
             expect(res.body).to.have.property("title", sampleMovie.title);
           });
       });
     });
    describe("when the id is invalid", () => {
      it("should return an empty array", () => {
        return request(api)
          .get(`/api/movies/9999`)
          .set("Accept", "application/json")
          .set("Authorization", token)
          .expect({});
      });
    });
  });


describe("Post /movies/:id", () => {
describe("post a new movie", () => {
it("should return the new movie added with a random id and a status 201", () => {
  return request(api)
    .post("/api/movies")
    .set("Accept", "application/json")
    .set("Authorization", token)
    .send({
      title: "TimeFlyer"
    })
    .expect(201)
    .then((res) => {
      expect(res.body).to.have.property("id");
      expect(res.body).to.have.property("title","TimeFlyer");
    });
});
});
});
//  describe("Delete /movies/:id", () => {
//  describe("when the movie's id invild",()=>{
//    it("should return the message the id is invild and can not be found",()=>{
//      return request(api)
//        .delete(`/api/movies/9999999999`)
//        .set("Accept", "application/json")
//        .set("Authorization", token)
//        .expect({});
//    });})
//  })
//   describe("delete movie", () => {
//   it("should return the success message and a status 200", () => {
//     return request(api)
//      .delete(`/api/movies/${sampleMovie.id}`)
//       .set("Authorization", token)
//       .expect("Content-Type", /json/)
//       .expect(200)
//       .expect({
//         message: `Deleted movie id: ${sampleMovie.id}.`,
//         status: 200
//       });
//   });
//   });

  });