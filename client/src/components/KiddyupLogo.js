import { Image, SimpleGrid, Center } from "@mantine/core";

const KiddyupLogo = () => {
  return (
    <div style={{ width: 250, marginLeft: "auto", marginRight: "auto" }}>
      <SimpleGrid cols={2}>
        <Image src="kiddyupLogo_pic.png" alt="logo" />
        <Center>
          <Image src="kiddyupText.png" alt="logo text" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default KiddyupLogo;
