import { AddressAutofill } from "@mapbox/search-js-react";

const accessToken = process.env.REACT_APP_MAPBOX_KEY;

const FindAddress = () => {
  return (
    <form>
      <AddressAutofill accessToken={accessToken}>
        <input
          name="address"
          placeholder="Address"
          type="text"
          autoComplete="address-line1"
        />
      </AddressAutofill>
      <button type="submit">Submit</button>
    </form>
  );
};
export default FindAddress;
