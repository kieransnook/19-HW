import React from "react";
import "./search.css";

function Search(props) {
  return (
    <input
      type="text"
      id="searchBox"
      placeholder="asdasdad"
      value={props.search}
      name="search"
      onSubmit={props.handleSearchChange}
    ></input>
  );
}

export default Search;
