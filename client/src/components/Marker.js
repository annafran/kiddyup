import { Link } from "react-router-dom";
import { Avatar } from "@mantine/core";
import "./Marker.css";

const Marker = ({ image, alt, link }) => {
  return (
    <Avatar
      className="marker"
      src={image}
      alt={alt}
      component={Link}
      to={link}
    />
  );
};

export default Marker;
