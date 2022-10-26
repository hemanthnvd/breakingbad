import { useEffect } from "react";
import CharacterCard from "./ui/CharacterCard";
import { useSelector, useDispatch } from "react-redux";
import { charactersAction } from "../store/characters";

const Character = () => {
  const dispatch = useDispatch();
  const charList = useSelector((state) => state.characters.charList);
  const text = useSelector((state) => state.input.text);
  const charLi = [];
  useEffect(() => {
    const fetchChar = async () => {
      let res = await fetch("https://www.breakingbadapi.com/api/characters");
      res = await res.json();
      for (const item in res) {
        charLi.push(
          <CharacterCard char_id={res[item].char_id} name={res[item].name} img={res[item].img} />
        );
      }
      dispatch(charactersAction.addChar(charLi));
    };
    fetchChar();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 2xl:grid-cols-5">
      {charList.filter((jsx) => jsx.props.name.toLowerCase().includes(text.toLowerCase()))}
    </div>
  );
};

export default Character;
