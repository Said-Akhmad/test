import "./CharacterCard.css";
import React, { useState, useEffect } from "react";
export default function CharacterCart({ characters }) {
 console.log(characters);
  return (
    <div className="grid-container">
      {characters.map((character,index) => (
        <div className="block" key={index}>
          <img
            className="character-image"
            src={character.image}
            alt={character.name}
          />
          <div>
            <h2 className="character-name">{character.name}</h2>
            <p className="character-status">Status: {character.status}</p>
            <p className="character-species">Species: {character.species}</p>
          </div>
        </div>
      ))}
    </div>
   
  );
}
