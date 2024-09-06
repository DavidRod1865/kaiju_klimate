import Logo from "../../assets/monster_weather_logo.png";
import LocationInput from "./LocationInput";
import { SignOutButton } from "@clerk/clerk-react";
import PropTypes from "prop-types";

const Header = ({ onSearch }) => {
  return (
    <div className="flex justify-between bg-white p-5 w-full bg-opacity-65 z-0">
      <div className="flex items-center">
        <img className="w-20" src={Logo} alt="Monster Weather App" />
        <h1 className="font-creepster text-5xl text-cyan-500 text-outline-blue ml-4">
          Kaiju Klimate
        </h1>
      </div>
      <div className="flex items-center">
        <LocationInput onSearch={onSearch} />
        <SignOutButton className="ml-5 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg text-md px-5 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" />
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired, 
};

export default Header;

