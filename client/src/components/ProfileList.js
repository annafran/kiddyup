import { useEffect, useState } from "react";
import { Container, Grid } from "@mantine/core";
import Profile from "./Profile";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const getProfiles = async () => {
      const response = await fetch("http://localhost:5002/profiles");
      const data = await response.json();
      setProfiles(data);
    };
    getProfiles();
  }, []);

  return (
    <>
      <Container size="xl">
        <Grid justify="center" gutter={0} mt="2rem">
          {profiles.map((profile) => {
            return (
              <>
                <Grid.Col style={{ minWidth: 360, maxWidth: 360 }}>
                  <Profile key={profile.id} profile={profile} />
                </Grid.Col>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default ProfileList;
