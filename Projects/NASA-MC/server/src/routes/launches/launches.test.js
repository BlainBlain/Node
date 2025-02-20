const request = require("supertest");
const app = require("../../app");
const { mongoConnect, mongoDisconnect } = require("../../services/mongo");

describe("Launches API", () => {
  beforeAll(async () => {
    await mongoConnect();
  });

  afterAll(async () => {
    await mongoDisconnect();
  });

  describe("Test GET /launches", () => {
    test("It should respond with 200 success", async () => {
      const response = await request(app)
        .get("/v1/launches")
        .expect(200)
        .expect("Content-Type", /json/);
    });
  });

  describe("Test POST /launches", () => {
    const completeLaunchData = {
      mission: "Mars Exploration",
      rocket: "MC-154",
      target: "Kepler-1652 b",
      launchDate: "June 16, 2032",
    };

    const launchDataWithoutDate = {
      mission: "Mars Exploration",
      rocket: "MC-154",
      target: "Kepler-1652 b",
    };

    const launchDataWithInvalidDate = {
      mission: "Mars Exploration",
      rocket: "MC-154",
      target: "Kepler-1652 b",
      launchDate: "Hello",
    };

    test("It should respond with 201 created", async () => {
      const response = await request(app)
        .post("/v1/launches")
        .send(completeLaunchData)
        .expect(201)
        .expect("Content-Type", /json/);

      const requestDate = new Date(completeLaunchData.launchDate).valueOf();
      const responseDate = new Date(response.body.launchDate).valueOf();
      expect(responseDate).toBe(requestDate);

      expect(response.body).toMatchObject(launchDataWithoutDate);
    });
    test("It should catch missing required launch property", async () => {
      const response = await request(app)
        .post("/v1/launches")
        .send(launchDataWithoutDate)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Missing required launch property",
      });
    });
    test("It should catch invalid launch date", async () => {
      const response = await request(app)
        .post("/v1/launches")
        .send(launchDataWithInvalidDate)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Invalid launch date",
      });
    });
  });
});
