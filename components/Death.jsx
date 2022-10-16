import { useEffect } from "react";
import DeathCard from "./ui/DeathCard";
import { useSelector, useDispatch } from "react-redux";
import { deathsAction } from "../store/deaths";

const Death = () => {
  const dispatch = useDispatch();
  const deathList = useSelector((state) => state.deaths.deaList);
  const text = useSelector((state) => state.input.text);
  let deathLi = [];
  useEffect(() => {
    const fetchDea = async () => {
      let Dea = await fetch("https://www.breakingbadapi.com/api/deaths");
      Dea = await Dea.json();
      for (const De in Dea) {
        deathLi.push(
          <DeathCard
            death_id={Dea[De].death_id}
            death={Dea[De].death}
            cause={Dea[De].cause}
            responsible={Dea[De].responsible}
            season={Dea[De].season}
            episode={Dea[De].episode}
            number_of_deaths={Dea[De].number_of_deaths}
          />
        );
      }
      dispatch(deathsAction.addDea(deathLi));
    };
    fetchDea();
  }, []);
  return (
    <>
      {deathList.filter((jsx) => jsx.props.responsible.toLowerCase().includes(text.toLowerCase()))}
    </>
  );
};

export default Death;
