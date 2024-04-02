import React, { useState } from "react";
import NavBar from "./NavBar";
import Search from "./Search";

const Header = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const handleSearch = (searchTerm) => {
    setSearchHistory([...searchHistory, searchTerm]);
    console.log(searchTerm);
  };
  return (
    <section className='flex flex-col h-[30rem] bg-[url("https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg")] bg-cover'>
      <NavBar />
      <div className="flex flex-col items-center justify-center gap-4 h-full w-2/3 self-center">
        <h1 className="flex text-white font-bold text-5xl text-center px-4">
          Country API App
        </h1>
        <p className="text-base font-medium text-center text-slate-200">
          This is a simple app that allows you to search for countries and
          continents using the API.
        </p>
        <div className="flex justify-center w-full">
          <Search onSearch={handleSearch} />
        </div>
      </div>
    </section>
  );
};

export default Header;
