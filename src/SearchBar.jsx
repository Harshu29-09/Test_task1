import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by name"
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
};

export default SearchBar;
