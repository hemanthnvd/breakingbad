import { useEffect } from "react";

const Character = () => {
  useEffect(() => {
    const fetchChar = async () => {
      const res = await fetch("https://www.breakingbadapi.com/api/characters");
      res = await res.json();
      console.log(res[0]);
    };
    fetchChar();
  }, []);
  return <></>;
};

export default Character;
