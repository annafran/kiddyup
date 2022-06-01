import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useState } from "react";
import { post } from "superagent";

const AddProfile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

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
            method: post,
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
                    label="firstName"
                    value={firstName}
                    onChange={(event) =>
                        setFirstName(event.currentTarget.value)
                    }
                    placeholder="First Name"
                />
                <TextInput
                    required
                    label="lastName"
                    value={lastName}
                    onChange={(event) => setLastName(event.currentTarget.value)}
                    placeholder="Last Name"
                />

                <Checkbox
                    mt="md"
                    label="I agree to sell my privacy"
                    {...form.getInputProps("termsOfService", {
                        type: "checkbox",
                    })}
                />

                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    );
};

export default AddProfile;
