import React, { useState } from "react";
import "./SearchBar.css"; // Import CSS for styling

const heritageSites = [
  "Dharmapuri Falls",
  "Brihadeeswara Temple",
  "Meenakshi Temple",
  "Shore Temple",
  "Rameshwaram Temple",
  "Thanjavur Palace",
];

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.length > 0) {
      const results = heritageSites.filter((site) =>
        site.toLowerCase().includes(query)
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search heritage sites..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
      {filteredResults.length > 0 && (
        <ul className="search-results">
          {filteredResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
