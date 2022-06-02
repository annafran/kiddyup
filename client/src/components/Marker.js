import React from "react";
import { Avatar } from "@mantine/core";
import { Link } from "react-router-dom";
import "./Marker.css";

const Marker = ({ profile }) => {
    return (
        <div>
            <Avatar
                src={profile.profilePhoto}
                alt={profile.firstName}
                size="sm"
                radius="lg"
                component={Link}
                to={`/profiles/${profile.id}`}
            />
        </div>
    );
};

export default Marker;
