import { useState } from "react";
import PropTypes from "prop-types";

const LocationInput = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      setSearchQuery("");
    }
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a location..."
        className="border p-2 rounded w-72 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-white-800 dark:text-black"
      />
      <button type="submit" className="ml-5 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-md px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">
        Search
      </button>
    </form>
  );
};

LocationInput.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

export default LocationInput;
