import { useEffect, useState } from "react";
import "./ProfileList.css";

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
                            <li className="profileList" key={profile.id}>
                                <h2>{profile.firstName}</h2>
                                <p>I'm a {profile.parentStatus}</p>
                                <p>
                                    I like {profile.hobbies[0]} and{" "}
                                    {profile.hobbies[1]}
                                </p>
                                <p>
                                    Number of children: {profile.numberChildren}
                                </p>
                                <p>
                                    Age of child: {profile.ageChildOne.years}{" "}
                                    {profile.ageChildOne.years === 1
                                        ? "year"
                                        : "years"}
                                    , {profile.ageChildOne.months} months
                                </p>
                                <p>{profile.birthdayChildOne}</p>
                                <p>I live in {profile.city}</p>
                                <img
                                    src={profile.profilePhoto}
                                    alt={profile.firstName}
                                />
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProfileList;
