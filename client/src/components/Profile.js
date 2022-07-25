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
  SimpleGrid,
} from "@mantine/core";
import { MoodKid } from "tabler-icons-react";
import "./Profile.css";

const Profile = ({ profile, setCenter, center }) => {
  const theme = useMantineTheme();

  const handleClickMap = () => {
    setCenter(profile.coordinates);
  };

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
        <Card
          shadow="sm"
          p="lg"
          m={16}
          style={{ backgroundColor: "#E6E6EA", height: "33rem" }}
          className="profileCard"
        >
          <Card.Section>
            <Image
              src={profile.profilePhoto}
              alt={profile.firstName}
              p="2rem"
              fit="cover"
              height="264px"
            />
          </Card.Section>
          <Group
            columns={2}
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div className="nameCitySection">
              <Title style={{ color: "#345c72", fontSize: "1.5rem" }} order={1}>
                {profile.firstName}
              </Title>
              <Badge
                style={{ color: "#345c72", backgroundColor: "white" }}
                variant="light"
              >
                {profile.parentStatus}
              </Badge>
              <Text weight={400} size="xs" className="city">
                {/* {mapIcon} */}
                {profile.city}
              </Text>
            </div>
            <div className="interestGrid">
              {profile.interests.map((interest) => {
                return (
                  <Badge
                    size="md"
                    style={{ backgroundColor: "#345c72" }}
                    variant="filled"
                    className="interestBadge"
                  >
                    {interest}
                  </Badge>
                );
              })}
            </div>
            <div className="childGrid">
              {profile.children.map((child) => {
                return (
                  <div>
                    <Badge
                      sx={{ paddingLeft: 3 }}
                      size="lg"
                      radius="xl"
                      style={{ color: "#345c72", backgroundColor: "#95DCDE" }}
                      variant="filled"
                      leftSection={childIcon}
                      className="childBadge"
                    >
                      {renderChild(child)}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </Group>
          <SimpleGrid cols={2}>
            <Button
              variant="light"
              style={{ backgroundColor: "white", marginTop: 14 }}
              fullWidth
              className="profileButton"
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "#345c72",
                }}
                to="/map"
                onClick={handleClickMap}
              >
                View on map
              </Link>
            </Button>
            <Button
              variant="light"
              style={{ backgroundColor: "white", marginTop: 14 }}
              fullWidth
              className="profileButton"
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "#345c72",
                }}
                to={`/profiles/${profile.id}`}
              >
                View profile
              </Link>
            </Button>
          </SimpleGrid>
        </Card>
      </div>
    </>
  );
};

export default Profile;
