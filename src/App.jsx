import React, { useState, useEffect } from "react";
import CharacterCard from "./Components/CharacterCard";
import "./App.css";
function App() {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = () => {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${nameFilter}&status=${statusFilter}`
    )
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleApplyFilter = () => {
    fetchCharacters();
  };

  useEffect(() => {
    setFilteredCharacters(characters);
  }, [characters]);

  return (
    <div>
      <div className="container">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />

        <label htmlFor="status">Status: </label>
        <select
          id="status"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <button className="button" onClick={handleApplyFilter}>
          Apply
        </button>
      </div>
      <CharacterCard characters={filteredCharacters} />
    </div>
  );
}

export default App;
