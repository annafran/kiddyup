import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import ConnectButton from "./ConnectButton";
import {
    Image,
    Text,
    Badge,
    ThemeIcon,
    Center,
    Group,
    SimpleGrid,
} from "@mantine/core";
import { MoodKid } from "tabler-icons-react";
import "./ProfilePage.css";

const ProfilePage = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState({});
    const [isNotFound, setIsNotFound] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const childIcon = (
        <div>
            <Center>
                <ThemeIcon
                    variant="filled"
                    radius="lg"
                    size="m"
                    style={{ color: "#345c72", backgroundColor: "#95DCDE" }}
                >
                    <MoodKid size={20} />
                </ThemeIcon>
            </Center>
        </div>
    );

    useEffect(() => {
        const getProfile = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/profiles/${id}`
            );
            if (response.ok === false) {
                setIsNotFound(true);
                return;
            }

            const data = await response.json();
            console.log(data);
            setProfile(data);
            setIsLoading(false);
        };

        getProfile();
    }, [id]);

    if (isNotFound) {
        return (
            <>
                <p>Sorry! We can't find that profile</p>
                <BackButton />
            </>
        );
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

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
        <div className="profileContainer">
            <Text align="center" className="profileName">
                {profile.firstName} {profile.lastName}
            </Text>
            <Image
                src={profile.profilePhoto}
                alt={profile.firstName}
                radius="sm"
                mb="2rem"
                mt="2rem"
            />
            <Group position="apart" mb="1rem" mt="1rem">
                <Text>I'm a {profile.parentStatus}</Text>

                <Text weight={400} size="sm" className="city">
                    You'll find me in {profile.city}
                </Text>

                <Text>I love </Text>
                <SimpleGrid cols={5}>
                    {profile.interests.map((interest) => {
                        return <Text size="md">{interest}</Text>;
                    })}
                </SimpleGrid>
                <Text>Children</Text>
                <SimpleGrid cols={2}>
                    {profile.children.map((child) => {
                        return (
                            <Badge
                                style={{
                                    color: "#345c72",
                                    backgroundColor: "#95DCDE",
                                }}
                                variant="filled"
                                leftSection={childIcon}
                            >
                                {renderChild(child)}
                            </Badge>
                        );
                    })}
                </SimpleGrid>
            </Group>
            <SimpleGrid cols={2}>
                <ConnectButton />
                <BackButton />
            </SimpleGrid>
        </div>
    );
};

export default ProfilePage;
