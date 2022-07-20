import { Link } from "react-router-dom";
import { Button, createStyles } from "@mantine/core";
import "./BackButton.css";

const useStyles = createStyles((theme) => ({
  control: {
    backgroundColor: "#345c72",
    "&:hover": {
      backgroundColor: "#95DCDE",
    },
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

const BackButton = () => {
  const { classes } = useStyles();
  return (
    <Button mt={14} className={`backButton ${classes.control}`} fullWidth>
      <Link to="/profiles" className={`backButtonLink ${classes.link}`}>
        Back to profiles
      </Link>
    </Button>
  );
};

export default BackButton;
