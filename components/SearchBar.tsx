import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reset input setelah pencarian
    setSearchTerm("");
  };

  return (
    <div className="flex items-center">
      <form onSubmit={handleSubmit} className="relative flex-grow">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-200 text-gray-700 rounded-3xl w-full sm:w-auto sm:max-w-md py-2 px-4 focus:outline-none focus:ring-2"
          style={{ width: "350px" }}
          value={searchTerm}
          onChange={handleInputChange}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <FaSearch />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
