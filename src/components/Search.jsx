import React, { useState } from "react";

export const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchterm] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchterm("");
  };
  return (
    <form className="w-2/3" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="search..."
        value={searchTerm}
        onChange={(event) => setSearchterm(event.target.value)}
        className="border border-gray-300 px-4 py-2 w-full outline-none"
      />
    </form>
  );
};

export default SearchInput;
