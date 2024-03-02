import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

const FavCard = (props) => {
  const [temp, setTemp] = useState({});
  useEffect(() => {
    const getData = async () => {
      let res = await fetch(`https://breakingbadwebapp.netlify.app/api/characters/${props.id}`);
      res = await res.json();
      setTemp(res[0]);
    };
    getData();
  }, []);
  return (
    <>
      <CharacterCard char_id={props.id} name={temp?.name} img={temp?.img} />
    </>
  );
};

export default FavCard;
