import { useEffect } from "react";
import EpisodeCard from "./ui/EpisodeCard";

const Episode = () => {
  let epiLi = [];
  useEffect(() => {
    const fetchEpi = async () => {
      let Epi = await fetch("https://www.breakingbadapi.com/api/episodes");
      Epi = await Epi.json();
      for (const ep in Epi) {
        epiLi.push(<EpisodeCard ep_id={Epi[ep].episode_id} />);
      }
      fetchEpi();
    };
  }, []);
  return <>{epiLi}</>;
};

export default Episode;
