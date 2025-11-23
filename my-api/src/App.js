import { BASE_URL } from "./API/api-url";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/character`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.data);
      });
  }, []);

  console.log("data from api", characters);

  return (
    <>
      <div>A Disney characters application</div>
      <div>
        {characters.map((character) => (
          <>
            <div> Character name: {character.name}</div>
            <img alt="character" src={character.imageUrl} />
            <div>Movies: {character.films}</div>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
