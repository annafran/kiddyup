import { AddressAutofill } from "@mapbox/search-js-react";
import { useState } from "react";

const accessToken = process.env.REACT_APP_MAPBOX_KEY;

const FindAddress = () => {
  const [value, setValue] = useState("");
  return (
    <form>
      <AddressAutofill accessToken={accessToken}>
        <input
          name="address"
          placeholder="Address"
          type="text"
          autoComplete="address-line1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </AddressAutofill>
      <button type="submit">Submit</button>
    </form>
  );
};
export default FindAddress;
