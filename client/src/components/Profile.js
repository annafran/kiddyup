import {
    Card,
    Image,
    Text,
    Badge,
    Button,
    Group,
    useMantineTheme,
    Title,
    ThemeIcon,
    Center,
} from "@mantine/core";
import { MoodKid } from "tabler-icons-react";

const Profile = ({ profile }) => {
    const theme = useMantineTheme();

    const secondaryColor =
        theme.colorScheme === "dark"
            ? theme.colors.dark[1]
            : theme.colors.gray[7];

    const childIcon = (
        <div>
            <Center>
                <ThemeIcon variant="filled" radius="lg" size="l" color="white">
                    <MoodKid size={20} />
                </ThemeIcon>
            </Center>
        </div>
    );

    const renderChild = (child) => {
        if (child.years === 1) {
            return `${child.years} year`;
        }
        if (child.years > 1) {
            return `${child.years} years`;
        } else if (child.months === 1) {
            return `${child.months} month`;
        }
        return `${child.months} months`;
    };

    return (
        <>
            <div style={{ width: 340, margin: "auto" }}>
                <Card shadow="sm" p="lg">
                    <Card.Section>
                        <Image
                            src={profile.profilePhoto}
                            alt={profile.firstName}
                        />
                    </Card.Section>

                    <Group
                        position="apart"
                        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                    >
                        <Title order={1}>{profile.firstName}</Title>
                        <Text weight={500}>{profile.city}</Text>
                        <Badge color="pink" variant="light">
                            {profile.parentStatus}
                        </Badge>

                        {profile.children.map((child) => {
                            return (
                                <div>
                                    <Badge
                                        sx={{ paddingLeft: 3 }}
                                        size="lg"
                                        radius="xl"
                                        color="white"
                                        variant="filled"
                                        leftSection={childIcon}
                                    >
                                        {renderChild(child)}
                                    </Badge>
                                </div>
                            );
                        })}
                    </Group>

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
