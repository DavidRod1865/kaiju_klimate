import Logo from "../../assets/monster_weather_logo.png";
import LocationInput from "./LocationInput";
import { SignOutButton } from "@clerk/clerk-react";
import PropTypes from "prop-types";

const Header = ({ onSearch }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-5 w-screen bg-opacity-65">
      <div className="flex items-center mb-4 md:mb-0">
        <img className="w-20 sm:w-16" src={Logo} alt="Monster Weather App" />
        <h1 className="font-creepster text-5xl text-cyan-500 text-outline-blue ml-4 sm:text-3xl">
          Kaiju Klimate
        </h1>
      </div>
      <div className="flex flex-col items-center md:flex-row">
        <LocationInput onSearch={onSearch} />
        <SignOutButton className="ml-5 sm:ml-0 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg text-md px-5 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" />
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
