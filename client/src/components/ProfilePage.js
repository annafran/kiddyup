import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import { Image, Text } from "@mantine/core";

const ProfilePage = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      const response = await fetch(`http://localhost:5002/profiles/${id}`);
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
  return (
    <div style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}>
      <Text
        style={{
          color: "#345c72",
          fontSize: "2rem",
          fontWeight: 700,
        }}
      >
        {profile.firstName}
      </Text>
      <Image src={profile.profilePhoto} alt={profile.firstName} radius="md" />
      <BackButton />
    </div>
  );
};

export default ProfilePage;
