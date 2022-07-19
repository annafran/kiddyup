import {
    TextInput,
    Button,
    Group,
    Box,
    Select,
    NumberInput,
    MultiSelect,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { At } from "tabler-icons-react";
const nzCities = require("../data/nzCities.json");
const interestsArray = require("../data/interests.json");

const AddProfile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [parentStatus, setParentStatus] = useState("");
    const [age, setAge] = useState(null);
    const [email, setEmail] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");
    const [years, setYears] = useState(0);
    const [months, setMonths] = useState(0);
    const [city, setCity] = useState("");
    const [interests, setInterests] = useState([]);
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();
    const [coordinates, setCoordinates] = useState([]);

    const lat = (city) => {
        return city.lat;
    };

    const lng = (city) => {
        return city.lng;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const newProfile = {
            firstName: firstName,
            lastName: lastName,
            parentStatus: parentStatus,
            age: age,
            email: email,
            profilePhoto: profilePhoto,
            children: [{ years: years }, { months: months }],
            city: city,
            interests: interests,
            coordinates: [lat, lng],
        };

        fetch("http://localhost:5002/profiles", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProfile),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setIsPending(false);
            })
            .catch((err) => {
                console.log(err);
            });

        navigate("/profiles");
    };

    const getCitiesArray = (nzCities) => {
        return nzCities.map((nzCityData) => {
            return nzCityData.city;
        });
    };

    const nzCitiesArray = getCitiesArray(nzCities);

    return (
        <Box sx={{ maxWidth: 300 }} mx="auto" mt="2rem">
            <form onSubmit={handleSubmit}>
                <TextInput
                    required
                    label="Your first name"
                    value={firstName}
                    onChange={(event) =>
                        setFirstName(event.currentTarget.value)
                    }
                    placeholder="Your first name"
                    // error="First name required"
                />
                <TextInput
                    required
                    label="Your last name"
                    value={lastName}
                    onChange={(event) => setLastName(event.currentTarget.value)}
                    placeholder="Your last name"
                    // error="Last name required"
                />
                <Select
                    label="Mama or Papa?"
                    placeholder="Pick one"
                    searchable
                    clearable
                    data={[
                        { value: "mama", label: "mama" },
                        { value: "papa", label: "papa" },
                    ]}
                    value={parentStatus}
                    onChange={setParentStatus}
                />
                <NumberInput
                    placeholder="Your age"
                    label="Your age"
                    value={age}
                    min={18}
                    onChange={(val) => setAge(val)}
                    required
                />
                <TextInput
                    required
                    label="Your email"
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                    placeholder="Your email"
                    icon={<At size={14} />}
                    // error=" Invalid email"
                />
                <TextInput
                    required
                    label="Your photo"
                    value={profilePhoto}
                    onChange={(event) =>
                        setProfilePhoto(event.currentTarget.value)
                    }
                    placeholder="Your profile photo link"
                    // error="Profile photo required"
                />
                <NumberInput
                    placeholder="Years"
                    label="Your child's age in years"
                    value={years}
                    min={0}
                    onChange={(val) => setYears(val)}
                    required
                />
                <NumberInput
                    placeholder="Months"
                    label="Your child's age in months"
                    value={months}
                    max={12}
                    min={0}
                    onChange={(val) => setMonths(val)}
                    required
                />
                <Select
                    label="Which city do you live in?"
                    placeholder="Pick one"
                    searchable
                    clearable
                    data={nzCitiesArray.map((nzCity) => {
                        return nzCity;
                    })}
                    value={city}
                    onChange={setCity}
                />
                <MultiSelect
                    value={interests}
                    label="Select your interests"
                    searchable
                    maxSelectedValues={5}
                    placeholder="Choose up to 5 interests"
                    clearable
                    onChange={setInterests}
                    data={interestsArray.map((interest) => {
                        return interest;
                    })}
                />
                <Group position="center" mt="md">
                    {!isPending && (
                        <Button
                            type="submit"
                            variant="light"
                            style={{
                                backgroundColor: "#d4edf4",
                                marginTop: 14,
                                color: "#345c72",
                            }}
                            fullWidth
                        >
                            Submit
                        </Button>
                    )}
                    {isPending && (
                        <Button
                            type="submit"
                            disabled
                            variant="light"
                            style={{
                                backgroundColor: "#d4edf4",
                                marginTop: 14,
                                color: "#345c72",
                            }}
                            fullWidth
                        >
                            Signing you up
                        </Button>
                    )}
                </Group>
            </form>
        </Box>
    );
};

export default AddProfile;
