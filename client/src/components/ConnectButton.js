// import { Link } from "react-router-dom";
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

const ConnectButton = () => {
  const { classes } = useStyles();
  return (
    <Button mt={14} className={`backButton ${classes.control}`} fullWidth>
      <a
        href="mailto: abc@example.com"
        className={`backButtonLink ${classes.link}`}
      >
        Connect with me
      </a>
    </Button>
  );
};

export default ConnectButton;
