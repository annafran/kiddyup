const request = require("supertest");
const app = require("./app");

describe("app", () => {
    it("should create a new profile and status of 201 when calling POST/profiles", async () => {
        const reqBody = {
            firstName: "Anna",
            lastName: "Munro",
            gender: "f",
            age: 37,
            numberChildren: 2,
            ageChildOne: 3,
            ageChildTwo: 1,
            genderChildOne: "f",
            genderChildTwo: "m",
            hobbies: ["dancing", "cooking"],
            location: {
                lat: "23444",
                long: "34999238",
            },
        };
        const response = await request(app).post("/profiles").send(reqBody);
        expect(response.status).toBe(201);
        expect(response.body).toEqual(expect.objectContaining(reqBody));
        expect(response.body.id).toBeDefined();
    });
});
