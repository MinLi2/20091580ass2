import chai from "chai";
import request from "supertest";
import api from "../../../../index";

const expect = chai.expect;

//let api;
let token;

// const sampleMovie = {
//   id: 337401,
//   title: "Mulan",
// };

describe("upcoming endpoint", function (){
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
    api.close(); // Release PORT 8080
    delete require.cache[require.resolve("../../../../index")];
  });
  describe("GET /upcomingmovies ", () => {
    it("should return 20 movies and a status 200", (done) => {
      request(api)
        .get("/api/upcoming")
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

//   describe("GET /upcoming/:id", () => {
//     // describe("when the id is valid", () => {
//     //   it("should return the matching movie", () => {
//     //     return request(api)
//     //       .get(`/api/movies/${sampleMovie.id}`)
//     //       .set("Accept", "application/json")
//     //       .set("Authorization", token)
//     //       .expect("Content-Type", /json/)
//     //       .expect(200)
//     //       .then((res) => {
//     //         expect(res.body).to.have.property("title", sampleMovie.title);
//     //       });
//     //   });
//     // });
//     describe("when the id is invalid", () => {
//       it("should return an empty array", () => {
//         return request(api)
//           .get(`/api/upcoming/99998`)
//           .set("Accept", "application/json")
//           .set("Authorization", token)
//           .expect({});
//       });
//     });
//   });


// describe("post a new movie", () => {
// it("should return the new movie added with a random id and a status 201", () => {
//   return request(api)
//     .post("/api/upcoming")
//     .set("Accept", "application/json")
//     .set("Authorization", token)
//     .send({
//       title: "TimeFlyer"
//     })
//     .expect(201)
//     .then((res) => {
//       expect(res.body).to.have.property("id");
//       expect(res.body).to.have.property("title","TimeFlyer");
//     });
// });
// });
});