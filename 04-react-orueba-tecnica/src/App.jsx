import { useEffect, useState } from "react";
import "./App.css";
import { useCatImage } from "./hooks/useCatImage.js";
import { useCatFact } from "./hooks/useCatFact.js";
import { Other } from "./Components/Other.jsx";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imgURL } = useCatImage({ fact });
  console.log(imgURL);
  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>App Gatitos</h1>
      <button onClick={handleClick}>Get New Fact</button>
      {fact && <p>{fact}</p>}
      {imgURL && (
        <img
          src={imgURL}
          alt={`image extrated using three first words for ${fact}`}
        />
      )}
    </main>
  );
}
