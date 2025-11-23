import "./getCharacters.css";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../API/api-url";
import { useNavigate } from "react-router-dom";

const GetCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  function getCharacterDetails(id) {
    navigate(`/character/${id}`);
  }

  useEffect(() => {
    fetch(`${BASE_URL}/character`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.data);
      });
  }, []);

  return (
    <div className="char-container">
      {characters.map((character) => (
        <div className="char-list" key={character._id}>
          <img className="char-img" alt="character" src={character.imageUrl} />
          <h3 className="char-name">{character.name}</h3>

          <button onClick={() => getCharacterDetails(character._id)}>
            Know More About Me
          </button>
        </div>
      ))}
    </div>
  );
};

export default GetCharacters;
