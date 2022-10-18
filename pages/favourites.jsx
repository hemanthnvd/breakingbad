import Navbar from "../components/Navbar";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../components/Auth/AuthContext";
import { db } from "../src/firebase-config";

const Favourites = () => {
  const { user } = useAuth();
  const getData = async () => {
    const userSnap = await getDoc(doc(db, "users", user.uid));
    if (userSnap.exists()) {
      console.log(userSnap.data());
      console.log(userSnap);
    } else {
      console.log("No favourites yet!");
    }
  };
  getData();

  return (
    <>
      <Navbar />
    </>
  );
};

export default Favourites;
