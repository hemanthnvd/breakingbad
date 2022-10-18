import Navbar from "../components/Navbar";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../components/Auth/AuthContext";
import { db } from "../src/firebase-config";
import { useState } from "react";

const Favourites = () => {
  const { user } = useAuth();
  const [favArray, setFavArray] = useState([]);
  const getData = async () => {
    const userSnap = await getDoc(doc(db, "users", user.uid));
    if (userSnap.exists()) {
      setFavArray(userSnap.data().fav);
    } else {
      console.log("No favourites yet!");
    }
  };
  getData();

  return (
    <>
      <Navbar />
      {favArray}
    </>
  );
};

export default Favourites;
