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

const ConnectButton = () => {
  const { classes } = useStyles();
  return (
    <a href="mailto: abc@example.com" className={classes.link}>
      <Button mt={14} className={classes.control} fullWidth>
        Connect with me
      </Button>
    </a>
  );
};

export default ConnectButton;
