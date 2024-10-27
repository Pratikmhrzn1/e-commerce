import Button from "@mui/material/Button"; // For Material-UI
import { FaAngleDown } from "react-icons/fa6";
const CountryDropdown = () => {
  return (
    <>
      <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <span className="label">Your location</span>
          <span className="name">Nepal</span>
        </div>
        <span className="hello">
          <FaAngleDown />
        </span>
      </Button>
    </>
  );
};
export default CountryDropdown;
