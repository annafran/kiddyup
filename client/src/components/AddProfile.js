import {
  TextInput,
  Button,
  Group,
  Box,
  Select,
  NumberInput,
  MultiSelect,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { At } from "tabler-icons-react";
import "./AddProfile.css";
const nzCities = require("../data/nzCities.json");
const interestsArray = require("../data/interests.json");

const AddProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [parentStatus, setParentStatus] = useState("");
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [city, setCity] = useState("");
  const [interests, setInterests] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);

    const newProfile = {
      firstName: firstName,
      lastName: lastName,
      parentStatus: parentStatus,
      age: age,
      email: email,
      profilePhoto: profilePhoto,
      children: [{ years: years, months: months }],
      city: city,
      interests: interests,
      createdDate: Date.now(),
      coordinates: coordinates,
    };

    fetch("http://localhost:5002/profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProfile),
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
      <form onSubmit={handleSubmit} className="formGrid">
        <TextInput
          required
          label="Your first name"
          value={firstName}
          onChange={(event) => setFirstName(event.currentTarget.value)}
          placeholder="Your first name"
          // error="First name required"
        />
        <TextInput
          required
          label="Your last name"
          value={lastName}
          onChange={(event) => setLastName(event.currentTarget.value)}
          placeholder="Your last name"
          // error="Last name required"
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
          value={parentStatus}
          onChange={setParentStatus}
        />
        <NumberInput
          placeholder="Your age"
          label="Your age"
          value={age}
          min={18}
          onChange={(val) => setAge(val)}
          required
        />
        <TextInput
          required
          label="Your email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          placeholder="Your email"
          icon={<At size={14} />}
          // error=" Invalid email"
        />
        <TextInput
          required
          label="Your photo"
          value={profilePhoto}
          onChange={(event) => setProfilePhoto(event.currentTarget.value)}
          placeholder="Your profile photo link"
          // error="Profile photo required"
        />
        <NumberInput
          placeholder="Years"
          label="Your child's age in years"
          value={years}
          min={0}
          onChange={(val) => setYears(val)}
          required
        />
        <NumberInput
          placeholder="Months"
          label="Your child's age in months"
          value={months}
          max={12}
          min={0}
          onChange={(val) => setMonths(val)}
          required
        />
        <Select
          label="Which city do you live in?"
          placeholder="Pick one"
          searchable
          clearable
          data={nzCitiesArray.map((nzCity) => {
            return nzCity;
          })}
          value={city}
          onChange={(value) => {
            setCity(value);
            setCoordinates(findCoordinates(value));
          }}
        />
        <MultiSelect
          value={interests}
          label="Select your interests"
          searchable
          maxSelectedValues={5}
          placeholder="Choose up to 5 interests"
          clearable
          onChange={setInterests}
          data={interestsArray.map((interest) => {
            return interest;
          })}
        />
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
