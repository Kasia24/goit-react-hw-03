import React from "react";

const SearchBox = ({ filter, setFilter }) => (
  <input
    type="text"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    placeholder="Search contacts..."
  />
);

export default SearchBox;
