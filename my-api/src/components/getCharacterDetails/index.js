import { useEffect, useState } from "react";
import { BASE_URL } from "../../API/api-url";
import { useParams } from "react-router-dom";
import "./style.css";

const GetCharacterInfo = () => {
    const {id} = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/characters/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data.data);
      });
  }, [id]);

  console.log("details data", details);

  return <div>
    {details && (
        <div className="details-container">
            <h2>{details.name}</h2>
            <img src={details.imageUrl} alt={details.name} />
            <p>Films: {details.films.join(", ")}</p>
            <p>TV Shows: {details.tvShows.join(", ")}</p>
            <p>Video Games: {details?.videoGames?.length
    ? details.videoGames.join(", ")
    : "None"}</p>
        </div>
    )}
  </div>;
};

export default GetCharacterInfo;
