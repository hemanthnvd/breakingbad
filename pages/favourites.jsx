import Navbar from "../components/Navbar";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../components/Auth/AuthContext";
import { db } from "../src/firebase-config";
import { useState } from "react";
import FavCard from "../components/ui/FavCard";

const Favourites = () => {
  const { user } = useAuth();
  const [favArray, setFavArray] = useState([]);
  useState(() => {
    const getData = async () => {
      const userSnap = await getDoc(doc(db, "users", user.uid));
      if (userSnap.exists()) {
        setFavArray(userSnap.data().fav);
      } else {
        console.log("No favourites yet!");
      }
    };
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="text-[#FEF8DC] text-xl m-5 ">Your Favourite Characters</h1>
      <div className="grid grid-cols-2 2xl:grid-cols-5 md:grid-cols-4 md:gap-4 md:m-8">
        {favArray.map((id) => (
          <FavCard key={id} id={id} />
        ))}
      </div>
    </>
  );
};

export default Favourites;
