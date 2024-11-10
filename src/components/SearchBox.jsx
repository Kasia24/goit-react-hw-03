import React from "react";
import "./SearchBox.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <label className="classLbl">
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
