import {
    TextInput,
    Button,
    Group,
    Box,
    Select,
    NumberInput,
} from "@mantine/core";
import { useState } from "react";

const AddProfile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [parentStatus, setParentStatus] = useState("");
    const [age, setAge] = useState(18);
    const [email, setEmail] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");
    const [children, setChildren] = useState([]);
    const [city, setCity] = useState("");
    const [hobbies, setHobbies] = useState([]);
    const [coordinates, setCoordinates] = useState([]);

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
            hobbies: [hobbies],
            coordinates: [latitude, longitude],
        };

        await fetch("http://localhost:5002/profiles", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProfile),
        });
        console.log("added profile");
    };

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
                    placeholder="First Name"
                />
                <TextInput
                    required
                    label="Your last name"
                    value={lastName}
                    onChange={(event) => setLastName(event.currentTarget.value)}
                    placeholder="Last Name"
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

                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    );
};

export default AddProfile;
