import { Image, Grid, Center } from "@mantine/core";

const KiddyupLogo = () => {
  return (
    <div style={{ width: 300, marginLeft: 0, marginRight: "auto" }}>
      <Grid align="center">
        <Grid.Col span={4}>
          <Image src="kiddyupLogo_pic.png" alt="logo" />
        </Grid.Col>
        <Grid.Col span={8}>
          <Image src="kiddyupText.png" alt="logo text" />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default KiddyupLogo;
