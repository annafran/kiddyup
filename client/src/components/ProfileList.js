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
      <Container size="80%">
        <Grid
          gutter="xl"
          columns={1}
          //   spacing={48}
          //   breakpoints={[
          //     { minWidth: "sm", cols: 2 },
          //     { minWidth: "lg", cols: 3 },
          //   ]}
        >
          {profiles.map((profile) => {
            return (
              <>
                <Grid.Col style={{ maxWidth: 340 }}>
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
