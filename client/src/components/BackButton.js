import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

const BackButton = () => {
    return (
        <Button>
            <Link to="/profiles">Back to profiles</Link>
        </Button>
    );
};

export default BackButton;
