import {
    Card,
    Image,
    Text,
    Badge,
    Button,
    Group,
    useMantineTheme,
} from "@mantine/core";

const Profile = ({ profile }) => {
    const theme = useMantineTheme();

    const secondaryColor =
        theme.colorScheme === "dark"
            ? theme.colors.dark[1]
            : theme.colors.gray[7];
    return (
        <>
            <div style={{ width: 340, margin: "auto" }}>
                <Card shadow="sm" p="lg">
                    <Card.Section>
                        <Image
                            src={profile.profilePhoto}
                            height={160}
                            alt={profile.firstName}
                        />
                    </Card.Section>

                    <Group
                        position="apart"
                        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                    >
                        <Text weight={500}>{profile.firstName}</Text>
                        <Badge color="pink" variant="light">
                            {profile.parentStatus}
                        </Badge>
                    </Group>

                    <Text
                        size="sm"
                        style={{ color: secondaryColor, lineHeight: 1.5 }}
                    >
                        I like {profile.hobbies[0]} and {profile.hobbies[1]}. I
                        live in {profile.city}. I have {profile.numberChildren}{" "}
                        children.
                    </Text>

                    <Button
                        variant="light"
                        color="blue"
                        fullWidth
                        style={{ marginTop: 14 }}
                    >
                        Connect with me
                    </Button>
                </Card>
            </div>
        </>
    );
};

export default Profile;

{
    /* <li className="profileList" >
    <h2></h2>
    <p>I'm a </p>
    <p>
        
    </p>
    <p>Number of children: </p>
    <p>
        Age of child: {profile.ageChildOne.years}{" "}
        {profile.ageChildOne.years === 1 ? "year" : "years"},{" "}
        {profile.ageChildOne.months} months
    </p>
    <p>{profile.birthdayChildOne}</p>
    <p></p>
    <img src= alt= />
</li>; */
}
