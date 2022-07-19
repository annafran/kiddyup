import { Link } from "react-router-dom";
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
import { MoodKid, MapPin } from "tabler-icons-react";

const Profile = ({ profile }) => {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  const childIcon = (
    <div>
      <Center>
        <ThemeIcon
          variant="filled"
          radius="lg"
          size="m"
          color="white"
          style={{ backgroundColor: "#f35a59" }}
        >
          <MoodKid size={20} />
        </ThemeIcon>
      </Center>
    </div>
  );

  const mapIcon = (
    <div>
      <Center>
        <ThemeIcon style={{ color: "black", backgroundColor: "transparent" }}>
          <MapPin size={15} />
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
      <div style={{ width: 360, margin: "auto" }}>
        <Card shadow="sm" p="lg" m={16}>
          <Card.Section>
            <Image src={profile.profilePhoto} alt={profile.firstName} />
          </Card.Section>
          <Group
            columns={2}
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <Title style={{ color: "#345c72", fontSize: "1.5rem" }} order={1}>
              {profile.firstName}
            </Title>
            <Badge
              style={{ color: "#345c72", backgroundColor: "#d4edf4" }}
              variant="light"
            >
              {profile.parentStatus}
            </Badge>
            <Text weight={400} size="xs">
              {/* {mapIcon} */}
              {profile.city}
            </Text>
            {profile.interests.map((interest) => {
              return (
                <div>
                  <Badge
                    size="md"
                    color="white"
                    style={{ backgroundColor: "#345c72" }}
                    variant="filled"
                  >
                    {interest}
                  </Badge>
                </div>
              );
            })}
            {profile.children.map((child) => {
              return (
                <div>
                  <Badge
                    sx={{ paddingLeft: 3 }}
                    size="lg"
                    radius="xl"
                    color="white"
                    style={{ backgroundColor: "#f35a59" }}
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
            style={{ backgroundColor: "#d4edf4", marginTop: 14 }}
            fullWidth
          >
            <Link
              style={{ textDecoration: "none", color: "#345c72" }}
              to={`/profiles/${profile.id}`}
            >
              Connect with me
            </Link>
          </Button>
        </Card>
      </div>
    </>
  );
};

export default Profile;
