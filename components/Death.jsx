import { useEffect, useState } from "react";
import DeathCard from "./ui/DeathCard";
import { useSelector, useDispatch } from "react-redux";
import { deathsAction } from "../store/deaths";

const Death = () => {
  const dispatch = useDispatch();
  const deathList = useSelector((state) => state.deaths.deaList);
  const text = useSelector((state) => state.input.text);
  let deathLi = [];
  const [filter, setFilter] = useState({ death: true, cause: false, responsible: false });
  useEffect(() => {
    const fetchDea = async () => {
      let Dea = await fetch("https://breakingbadwebapp.netlify.app/api/deaths");
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
  const optChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "death") {
      setFilter({ death: true, cause: false, responsible: false });
    } else if (e.target.value === "cause") {
      setFilter({ death: false, cause: true, responsible: false });
    } else if (e.target.value === "responsible") {
      setFilter({ death: false, cause: false, responsible: true });
    }
  };
  return (
    <>
      <div className="flex justify-end text-white m-2">
        <h1 className="m-2">Search by : </h1>
        <div className="inline-block relative w-40">
          <select
            className="block appearance-none w-full bg-black border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-xl shadow leading-tight focus:outline-none focus:shadow-outline"
            onChange={optChange}
          >
            <option value={"death"} className="text-xs md:text-base">
              Dead
            </option>
            <option value={"cause"} className="text-xs md:text-base">
              Cause
            </option>
            <option value={"responsible"} className="text-xs md:text-base">
              Responsible
            </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      {filter.death &&
        deathList.filter((jsx) => jsx.props.death.toLowerCase().includes(text.toLowerCase()))}
      {filter.cause &&
        deathList.filter((jsx) => jsx.props.cause.toLowerCase().includes(text.toLowerCase()))}
      {filter.responsible &&
        deathList.filter((jsx) => jsx.props.responsible.toLowerCase().includes(text.toLowerCase()))}
    </>
  );
};

export default Death;
