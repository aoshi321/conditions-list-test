const supertest = require("supertest");

const app = require("./app");
const data = require("./data/conditions");
const request = supertest(app);

it("gets conditions data", async done => {
  const response = await request.get("/conditions");

  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual(data);
  done();
});
