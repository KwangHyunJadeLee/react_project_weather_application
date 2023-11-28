import React, { useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Card from "./UI/Card";

// Functional component representing the search input and buttons.

const Search = ({ cities, setCity, setCities, searched, setSearched }) => {
  const [searchInput, setSearchInput] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  // Handles the search action.
  const handleSearch = () => {
    setCity(searchInput);
    setSearched(searchInput);
  };

  // Handles adding the currently searched city to favorites.
  const handleAddFavorite = () => {
    if (searched && !cities.includes(searched)) {
      setCities((prevCities) => [...prevCities, searched]);
      setIsFavorite(true);
    }
  };

  return (
    <div className="search-container">
      {/* Input for city search */}
      <Input
        placeholder="Please fill city name"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {/* Button for initiating search */}
      <Button onClick={handleSearch}>Search</Button>
      {/* Button for adding to favorites, with conditional rendering and styling */}
      {searched && (
        <Button onClick={handleAddFavorite} disabled={isFavorite}>
          {isFavorite ? "Favorited" : "Add to Favorites"}
        </Button>
      )}
    </div>
  );
};

export default Search;
