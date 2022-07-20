import {
  Button,
  Group,
  Select,
  NumberInput,
  MultiSelect,
  Box,
  TextInput,
  Text,
  ActionIcon,
} from "@mantine/core";
import { useForm, formList } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { At, Trash } from "tabler-icons-react";
import "./AddProfile.css";
const nzCities = require("../data/nzCities.json");
const interestsArray = require("../data/interests.json");

const AddProfile = () => {
  const [coordinates, setCoordinates] = useState([]);
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      parentStatus: "",
      age: null,
      email: "",
      profilePhoto: "",
      children: formList([{ years: null, months: null, key: randomId() }]),
      city: "",
      interests: [],
      createdDate: Date.now(),
      coordinates: coordinates,
    },
  });

  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const getCitiesArray = () => {
    return nzCities.map((nzCityData) => {
      return nzCityData.city;
    });
  };

  const nzCitiesArray = getCitiesArray(nzCities);

  const findCoordinates = (city) => {
    const found = nzCities.find((item) => {
      return item.city === city;
    });

    return found ? [found.lat, found.lng] : undefined;
  };

  const fields = form.values.children.map((item, index) => (
    <Group key={item.key} mt="xs">
      <NumberInput
        placeholder="years"
        label="Your child's age in years"
        min={0}
        required
        sx={{ flex: 1 }}
        {...form.getListInputProps("children", index, "years")}
      />
      <NumberInput
        placeholder="months"
        label="Your child's age in months"
        min={0}
        max={12}
        required
        sx={{ flex: 1 }}
        {...form.getListInputProps("children", index, "months")}
      />
      <ActionIcon
        color="red"
        variant="hover"
        onClick={() => form.removeListItem("children", index)}
      >
        <Trash size={16} />
      </ActionIcon>
    </Group>
  ));

  const handleSubmit = (values) => {
    setIsPending(true);
    console.log(values);
    setCoordinates(findCoordinates(values.city));

    fetch("http://localhost:5002/profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIsPending(false);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/profiles");
  };

  return (
    <Box mx="auto" mt="2rem">
      <form onSubmit={form.onSubmit(handleSubmit)} className="formGrid">
        <TextInput
          required
          label="Your first name"
          {...form.getInputProps("firstName")}
          placeholder="Your first name"
        />
        <TextInput
          required
          label="Your last name"
          {...form.getInputProps("lastName")}
          placeholder="Your last name"
        />
        <Select
          label="Mama or Papa?"
          placeholder="Pick one"
          searchable
          clearable
          data={[
            { value: "mama", label: "mama" },
            { value: "papa", label: "papa" },
          ]}
          {...form.getInputProps("parentStatus")}
        />
        <NumberInput
          placeholder="Your age"
          label="Your age"
          min={18}
          {...form.getInputProps("age")}
          required
        />
        <TextInput
          required
          label="Your email"
          {...form.getInputProps("email")}
          placeholder="Your email"
          icon={<At size={14} />}
        />
        <TextInput
          required
          label="Your photo"
          placeholder="Your profile photo link"
          {...form.getInputProps("profilePhoto")}
        />
        <Select
          label="Which city do you live in?"
          placeholder="Pick one"
          searchable
          clearable
          data={nzCitiesArray.map((nzCity) => {
            return nzCity;
          })}
          {...form.getInputProps("city")}
          // onChange={() => {
          //   setCoordinates(findCoordinates());
          // }}
        />
        <MultiSelect
          label="Select your interests"
          searchable
          maxSelectedValues={5}
          placeholder="Choose up to 5 interests"
          clearable
          {...form.getInputProps("interests")}
          data={interestsArray.map((interest) => {
            return interest;
          })}
        />
        <Box sx={{ maxWidth: 500 }} mx="auto">
          {fields.length > 0 ? (
            <Group mb="xs">
              <Text weight={500} size="sm" sx={{ flex: 1 }}>
                Years
              </Text>
              <Text weight={500} size="sm" sx={{ flex: 1 }}>
                Months
              </Text>
            </Group>
          ) : (
            <Text color="dimmed" align="center">
              You must add at least one child
            </Text>
          )}
          {fields}
          <Group position="center" mt="md">
            <Button
              onClick={() =>
                form.addListItem("children", {
                  years: null,
                  months: null,
                  key: randomId(),
                })
              }
            >
              Add child
            </Button>
          </Group>
        </Box>
        <Group position="left">
          {!isPending && (
            <Button
              type="submit"
              variant="light"
              style={{
                backgroundColor: "#95DCDE",
                marginTop: 14,
                color: "#345c72",
              }}
            >
              Submit
            </Button>
          )}
          {isPending && (
            <Button
              type="submit"
              disabled
              variant="light"
              style={{
                backgroundColor: "#95DCDE",
                marginTop: 14,
                color: "#345c72",
              }}
            >
              Signing you up
            </Button>
          )}
        </Group>
      </form>
    </Box>
  );
};

export default AddProfile;
