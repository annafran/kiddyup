import { useEffect, useState } from "react";
import { SimpleGrid } from "@mantine/core";
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
        <div>
            <SimpleGrid cols={5}>
                {profiles.map((profile) => {
                    return (
                        <>
                            <Profile key={profile.id} profile={profile} />
                        </>
                    );
                })}
            </SimpleGrid>
        </div>
    );
};

export default ProfileList;
