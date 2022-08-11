import { useEffect, useState } from "react";
import { Loader } from "@mantine/core";
import { Container, Grid, Text } from "@mantine/core";
import Profile from "./Profile";

const ProfileList = ({ setCenter, setActive }) => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getProfiles = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/profiles`);
      const data = await response.json();
      setProfiles(data);
      setLoading(false);
    };
    getProfiles();
  }, []);

  const renderProfiles = () => {
    if (loading) {
      return (
        <>
          <Grid justify="center" mt="5rem">
            <Loader size={100} color="cyan" />
          </Grid>
        </>
      );
    }

    if (profiles.length === 0) {
      return (
        <Grid justify="center" mt="5rem">
          <Text>Oops no profiles found!</Text>
        </Grid>
      );
    }
    return (
      <>
        <Grid justify="center" gutter={0} mt="2rem">
          {profiles.map((profile) => {
            return (
              <>
                <Grid.Col style={{ minWidth: 360, maxWidth: 360 }}>
                  <Profile
                    key={profile.id}
                    profile={profile}
                    setCenter={setCenter}
                    setActive={setActive}
                  />
                </Grid.Col>
              </>
            );
          })}
        </Grid>
      </>
    );
  };

  return (
    <>
      <Container size="xl">{renderProfiles()}</Container>
    </>
  );
};

export default ProfileList;
