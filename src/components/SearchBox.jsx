import React from "react";

const SearchBox = ({ filter, setFilter }) => (
  <label
    className="classLabel"
    type="text"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  >
    Find contacts by name
  </label>
);

export default SearchBox;
