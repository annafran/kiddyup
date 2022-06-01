import {
    TextInput,
    Button,
    Group,
    Box,
    Select,
    NumberInput,
} from "@mantine/core";
import { useState } from "react";
import { At } from "tabler-icons-react";
const nzCities = require("../data/nzCities.json");
const interestsArray = require("../data/interests.json");

const AddProfile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [parentStatus, setParentStatus] = useState("");
    const [age, setAge] = useState(18);
    const [email, setEmail] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");
    const [years, setYears] = useState(0);
    const [months, setMonths] = useState(0);
    const [city, setCity] = useState("");
    const [interests, setInterests] = useState([]);
    // const [coordinates, setCoordinates] = useState([]);

    // const lat = (city) => {
    //     return city.lat;
    // };

    // const lng = (city) => {
    //     return city.lng;
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProfile = {
            firstName: firstName,
            lastName: lastName,
            parentStatus: parentStatus,
            age: age,
            email: email,
            profilePhoto: profilePhoto,
            children: [{ years: years }, { months: months }],
            city: city,
            // coordinates: [lat, lng],
        };

        await fetch("http://localhost:5002/profiles", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProfile),
        });
        console.log("added profile");
    };

    const getCitiesArray = (nzCities) => {
        return nzCities.map((nzCityData) => {
            return nzCityData.city;
        });
    };
    const nzCitiesArray = getCitiesArray(nzCities);

    return (
        <Box sx={{ maxWidth: 300 }} mx="auto">
            <form onSubmit={handleSubmit}>
                <TextInput
                    required
                    label="Your first name"
                    value={firstName}
                    onChange={(event) =>
                        setFirstName(event.currentTarget.value)
                    }
                    placeholder="Your first name"
                    error="First name required"
                />
                <TextInput
                    required
                    label="Your last name"
                    value={lastName}
                    onChange={(event) => setLastName(event.currentTarget.value)}
                    placeholder="Your last name"
                    error="Last name required"
                />
                <Select
                    label="Mama or Papa?"
                    placeholder="Pick one"
                    data={[
                        { value: "mama", label: "mama" },
                        { value: "papa", label: "papa" },
                    ]}
                    value={parentStatus}
                    onChange={(event) =>
                        setParentStatus(event.currentTarget.value)
                    }
                />
                <NumberInput
                    placeholder="Your age"
                    label="Your age"
                    value={age}
                    onChange={(event) => setAge(event.currentTarget.value)}
                    required
                />
                <TextInput
                    required
                    label="Your email"
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                    placeholder="Your email"
                    icon={<At size={14} />}
                    error=" Invalid email"
                />
                <TextInput
                    required
                    label="Your photo"
                    value={profilePhoto}
                    onChange={(event) =>
                        setProfilePhoto(event.currentTarget.value)
                    }
                    placeholder="Your profile photo link"
                    error="Profile photo required"
                />
                <NumberInput
                    placeholder="Years"
                    label="Your child's age in years"
                    value={years}
                    onChange={(event) => setYears(event.currentTarget.value)}
                    required
                />
                <NumberInput
                    placeholder="Months"
                    label="Your child's age in months"
                    value={months}
                    onChange={(event) => setMonths(event.currentTarget.value)}
                    required
                />
                <Select
                    label="Which city do you live in?"
                    placeholder="Pick one"
                    data={nzCitiesArray.map((nzCity) => {
                        return { value: { nzCity }, label: { nzCity } };
                    })}
                    value={parentStatus}
                    onChange={(event) => setCity(event.currentTarget.value)}
                />
                <Select
                    label="Your interests"
                    placeholder="Pick one"
                    data={interestsArray.map((interest) => {
                        return { value: { interest }, label: { interest } };
                    })}
                    value={interests}
                    onChange={(event) =>
                        setInterests(event.currentTarget.value)
                    }
                />

                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    );
};

export default AddProfile;
