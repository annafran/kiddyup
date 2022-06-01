import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useState } from "react";

const AddProfile = () => {
    const [firstName, setFirstName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProfile = {
            firstName: firstName,
            lastName: lastName,
            parentStatus: parentStatus,
            age: age,
            email: email,
            profilePhoto: profilePhoto,
            numberChildren: numberChildren,
            ageChildren: [
                { childOne: childOne },
                { childTwo: childTwo },
                { childThree: childThree },
                { childFour: childFour },
            ],
        };
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
