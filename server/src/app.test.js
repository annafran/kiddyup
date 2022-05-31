const request = require("supertest");
const app = require("./app");

describe("app", () => {
    it("should GET the profiles and status of 200 when calling GET/ profiles", async () => {
        const expectedBody = [
            {
                firstName: "Anna",
                lastName: "Munro",
                parentStatus: "Mama",
                birthday: "1981-11-03",
                email: "annatest@hotmail.com",
                profilePhoto:
                    "https://this-person-does-not-exist.com/img/avatar-34f1c6d0f0702af22c6af7c93babfd5e.jpg",
                bio: "I love dancing and would like to meet mums who want to get their groove on",
                numberChildren: 1,
                birthdayChildOne: "2021-12-02",
                neighbourhood: "Grey Lynn",
                hobbies: ["dancing", "running", "cooking"],
                coordinates: [36, 174],
                id: "6295d1f837774a26e211e7db",
            },
        ];
        const response = await request(app).get("/profiles");
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectedBody);
    });

    it("should create a new profile and status of 201 when calling POST/ profiles", async () => {
        const reqBody = {
            firstName: "Anna",
            lastName: "Munro",
            parentStatus: "Mama",
            birthday: "1981-11-03",
            email: "annatest@hotmail.com",
            profilePhoto:
                "https://this-person-does-not-exist.com/img/avatar-34f1c6d0f0702af22c6af7c93babfd5e.jpg",
            bio: "I love dancing and would like to meet mums who want to get their groove on",
            numberChildren: 1,
            birthdayChildOne: "2021-12-02",
            neighbourhood: "Grey Lynn",
            hobbies: ["dancing", "running", "cooking"],
            coordinates: [36, 174],
        };
        const response = await request(app).post("/profiles").send(reqBody);
        expect(response.status).toBe(201);
        expect(response.body).toEqual(expect.objectContaining(reqBody));
        expect(response.body.id).toBeDefined();
    });
});
