import { Link } from "react-router-dom";
import { Avatar } from "@mantine/core";
import "./AvatarIcon.css";

const AvatarIcon = ({ image, alt, link, setActive }) => {
  return (
    <Avatar
      className="marker"
      src={image}
      alt={alt}
      component={Link}
      to={link}
      onClick={() => setActive("/profiles")}
    />
  );
};

export default AvatarIcon;
