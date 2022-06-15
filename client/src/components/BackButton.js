import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

const BackButton = () => {
  return (
    <Button
      variant="light"
      style={{ backgroundColor: "#d4edf4", marginTop: 14 }}
      fullWidth
    >
      <Link to="/profiles" style={{ textDecoration: "none", color: "#345c72" }}>
        Back to profiles
      </Link>
    </Button>
  );
};

export default BackButton;
