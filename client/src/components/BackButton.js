import { Link } from "react-router-dom";
import { Button, createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  control: {
    backgroundColor: "#345c72",
    color: "white",
    "&:hover": {
      backgroundColor: "#95DCDE",
      color: "#495057",
    },
  },
  link: {
    textDecoration: "none",
  },
}));

const BackButton = () => {
  const { classes } = useStyles();
  return (
    <Link to="/profiles" className={classes.link}>
      <Button mt={14} className={classes.control} fullWidth>
        Back to profiles
      </Button>
    </Link>
  );
};

export default BackButton;
