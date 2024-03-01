import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CharacterDetail from "../../components/CharacterDetail";
import Navbar from "../../components/Navbar";

const CharDetail = () => {
  const router = useRouter();
  const charId = router.query.charid;
  const [det, setDet] = useState({});
  useEffect(() => {
    const fetchCharDetail = async () => {
      let res = await fetch(`https://breakingbadwebapp.netlify.app/api/characters/${charId}`);
      res = await res.json();
      setDet((prevState) => res[0]);
    };
    fetchCharDetail();
  }, []);
  return (
    <>
      <Navbar />
      <CharacterDetail det={det} />
    </>
  );
};

export default CharDetail;
