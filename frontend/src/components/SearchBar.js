import React from "react";
import "../CSS/SearchBar.css";

const SearchBar = () => {
  return (
    <>
      <form>
        <input
          className="SearchBar"
          placeholder="Search Fumblr"
          type="search"
          results="0"
        />
      </form>
    </>
  );
};

export default SearchBar;
