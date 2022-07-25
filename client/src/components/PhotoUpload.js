import { Group, Text, useMantineTheme } from "@mantine/core";
import { Upload, Photo, X } from "tabler-icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";

function getIconColor(status, theme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6]
    : status.rejected
    ? theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
    : theme.colorScheme === "dark"
    ? theme.colors.dark[0]
    : theme.colors.gray[7];
}

function ImageUploadIcon({ status, ...props }) {
  if (status.accepted) {
    return <Upload {...props} />;
  }

  if (status.rejected) {
    return <X {...props} />;
  }

  return <Photo {...props} />;
}

export const dropzoneChildren = (status, theme) => (
  <Group
    position="center"
    spacing="xl"
    style={{ minHeight: 220, pointerEvents: "none" }}
  >
    <ImageUploadIcon
      status={status}
      style={{ color: getIconColor(status, theme) }}
      size={80}
    />

    <div>
      <Text size="xl" inline>
        Drag image here or click to select file
      </Text>
      <Text size="sm" color="dimmed" inline mt={7}>
        Attach your profile photo. It should be a jpeg or png format and not
        exceed 5mb.
      </Text>
    </div>
  </Group>
);

const PhotoUpload = () => {
  const theme = useMantineTheme();
  return (
    <Dropzone
      onDrop={(files) => console.log("accepted files", files)}
      onReject={(files) => console.log("rejected files", files)}
      maxSize={3 * 1024 ** 2}
      accept={["image/png", "image/jpeg"]}
    >
      {(status) => dropzoneChildren(status, theme)}
    </Dropzone>
  );
};

export default PhotoUpload;
