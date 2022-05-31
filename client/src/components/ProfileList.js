import { useEffect, useState } from "react";

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
            <ul>
                {profiles.map((profile) => {
                    return (
                        <>
                            <li key={profile.id}>
                                <h2>{profile.firstName}</h2>
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProfileList;
