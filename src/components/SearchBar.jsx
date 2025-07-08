import React from 'react';

const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <input
  type="text"
  value={searchQuery}
  onChange={e => onSearch(e.target.value)}
  placeholder="Search by name or email..."
  className="search-bar"
/>

  );
};

export default SearchBar;
