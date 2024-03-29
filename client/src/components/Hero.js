import React from "react";
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { Check } from "tabler-icons-react";
import father from "../assets/father.svg";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    backgroundColor: "#345c72",
    color: "white",
    "&:hover": {
      backgroundColor: "#95DCDE",
      color: "#495057",
    },
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  themeIcon: {
    backgroundColor: "#f46530",
  },

  highlight: {
    position: "relative",
    backgroundColor: "#EAF6FA   ",
    borderRadius: theme.radius.sm,
    padding: "3px 10px",
  },
}));

export function Hero({ setActive }) {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A platform for connecting with{" "}
              <span className={classes.highlight}>parents</span> near you
              <br />
            </Title>
            <Text color="dimmed" mt="md">
              Set up a profile with your location, children's ages and your
              interests – Kiddyup allows you to reach out to other similar
              parents and meetup!
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon className={classes.themeIcon} size={20} radius="xl">
                  <Check size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Connect by location</b> – find other parents near to where
                you live
              </List.Item>
              <List.Item>
                <b>Connect with like-minded friends</b> – find parents who have
                similar aged children or the same interests
              </List.Item>
              <List.Item>
                <b>Free</b> – sign up to Kiddyup free of charge
              </List.Item>
            </List>

            <Group mt={30}>
              <Link to="/signup">
                <Button
                  radius="xl"
                  size="md"
                  className={classes.control}
                  onClick={() => setActive("/signup")}
                >
                  Get started
                </Button>
              </Link>
            </Group>
          </div>
          <Image src={father} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}

export default Hero;
