import { Title } from "@mantine/core";
import { Image } from "@mantine/core";
import { Text } from "@mantine/core";
import father from "../assets/father.svg";

const Home = () => {
  return (
    <>
      <Title order={3} align="center" mt="4rem" ml="2rem" mr="2rem">
        Are you a mother or father who wants to meet other parents?
      </Title>
      <Image
        width="30rem"
        align="center"
        src={father}
        alt="Random unsplash image"
        mt="4rem"
      />
      <Text size="xl" align="center" mt="4rem">
        Search by your location and connect!
      </Text>
    </>
  );
};

export default Home;
