import React from "react";
import "./header.css";

function Head() {
  return (
    <>
      <header class="header">
        <h1>EMPLOYEE DIRECTORY</h1>
        <p>This is Our directory</p>
        <input type="text" id="searchBox" placeholder="Search" />
      </header>
    </>
  );
}

export default Head;
