import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

type SearchBarProps = {
  onSearch: (keyword: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSearch = () => {
    onSearch(searchValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const inputBorderColor = isInputFocused ? "border-blue-500" : "border-gray-300";

  return (
    <div className="flex justify-center items-center">
      <div className={`relative ${inputBorderColor}`}>
        <input
          type="text"
          placeholder="Search by title"
          value={searchValue}
          onChange={handleChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className="px-4 py-2 pr-8 border rounded-3xl w-full sm:w-auto sm:max-w-md  focus:outline-none"
          style={{ width: "370px" }}
        />
        <FaSearch
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;






