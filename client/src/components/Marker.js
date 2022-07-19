import { Link } from "react-router-dom";
import "./Marker.css";

const Marker = ({ image, alt, link }) => {
  return (
    <div>
      <img
        className="marker"
        src={image}
        alt={alt}
        component={Link}
        to={link}
      />
    </div>
  );
};

export default Marker;
