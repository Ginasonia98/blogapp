import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-200 text-gray-700 rounded-3xl w-full sm:w-auto sm:max-w-md py-2 px-4 focus:outline-none focus:ring-2"
          style={{ width: "350px" }}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;


