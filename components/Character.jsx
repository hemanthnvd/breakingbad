import { useEffect, useState } from "react";
import CharacterCard from "./ui/CharacterCard";

const Character = () => {
  const charList = [];
  const [charLi, setCharLi] = useState([]);
  useEffect(() => {
    const fetchChar = async () => {
      let res = await fetch("https://www.breakingbadapi.com/api/characters");
      res = await res.json();
      for (const item in res) {
        charList.push(<CharacterCard char_id={res[item].char_id} name={res[item].name} img={res[item].img} />);
      }
      setCharLi(charList);
    };
    fetchChar();
  }, []);
  return <div className="grid grid-cols-4 gap-4">{charLi}</div>;
};

export default Character;
